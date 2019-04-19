import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wikiSearch: "",
      data: [],
      title: "",
      content: "",
      history: [],
      links: []
    };
    this.renderHistory = this.renderHistory.bind(this);
    this.renderLinks = this.renderLinks.bind(this);
  }

  renderHistory() {
    if (this.state.history.length !== 0) {
      console.log("render History");
      return this.state.history.map((c, i) => (
        <Button key={i++} onClick={e => this.historyButtonSearch(e, c)}>
          {c}
        </Button>
      ));
    }
  }

  renderLinks() {
    if (this.state.links.length !== 0) {
      console.log("cc:--" + this.state.links[0]["*"]);
      return this.state.links.map((c, i) => (
        <Button
          primary
          size={"mini"}
          key={i++}
          onClick={e => this.buttonSearch(e, c["*"])}
        >
          {c["*"]}
        </Button>
      ));
    }
  }

  handleChangeSearch(event) {
    this.setState({
      wikiSearch: event.target.value
    });
  }

  historyButtonSearch(event, term) {
    event.preventDefault();
    console.log("HISTORY button!!:  ");
    let index = this.state.history.indexOf(term);
    let newArr = this.state.history.slice(0, index + 1);
    this.setState({ history: newArr });
    Meteor.call("searchWiki", term, (error, result) => {
      this.setState({
        wikiSearch: "",
        title: result.title,
        content: result.text,
        links: result.links
      });
    });
  }

  buttonSearch(event, term) {
    event.preventDefault();
    console.log("button:  ");
    let newHistory = this.state.history.concat(term);
    this.setState({ history: newHistory });
    Meteor.call("searchWiki", term, (error, result) => {
      this.setState({
        wikiSearch: "",
        title: result.title,
        content: result.text,
        links: result.links
      });
    });
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.state.wikiSearch !== "") {
      console.log("1");

      let newHistory = this.state.history.concat(this.state.wikiSearch);
      this.setState({ history: newHistory });

      console.log("2");
      Meteor.call("searchWiki", this.state.wikiSearch, (error, result) => {
        console.log("res--3-- length:  " + result.links.length);
        this.setState({
          wikiSearch: "",
          title: result.title,
          content: result.text,
          links: result.links
        });
      });
    }
  }

  render() {
    return (
      <div>
        <h2>Wiki Search</h2>
        <div>
          <form action="">
            <label htmlFor="wikiSearch">Wiki Search: </label>
            <input
              id="wikiSearch"
              type="text"
              name={"wikiSearch"}
              value={this.state.wikiSearch}
              onChange={e => this.handleChangeSearch(e)}
            />
            <button onClick={e => this.handleSearch(e)}>Submit</button>
          </form>
        </div>

        <hr />

        <br />
        <div>
          <h2>History: </h2>
          <div>{this.renderHistory()}</div>
        </div>
        <br />
        <div>
          <h2>Links: </h2>
          <div>{this.renderLinks()}</div>
        </div>
        <br />
        <div>
          <h2>Content: {this.state.title}</h2>
          <span dangerouslySetInnerHTML={{ __html: this.state.content["*"] }} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  comments: PropTypes.array
};
