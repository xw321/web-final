import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
// import { withTracker } from "meteor/react-meteor-data";

import PropTypes from "prop-types";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: "",
      wikiSearch: "",
      data: [],
      response: "",
      title: ""
    };
  }

  renderHistory() {}
  // 每当用户在wikiSearch对应的输入框中输入信息时，就会调用这个函数来修改this.state.wikiSearch字段的信息
  handleChangeSearch(event) {
    this.setState({
      wikiSearch: event.target.value
    });
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.state.wikiSearch !== "") {
      Meteor.call("searchWiki", this.state.wikiSearch, (error, result) => {
        console.log("red:  " + result.links);
        console.log("res--:  " + JSON.stringify(result.title));
        this.setState({
          wikiSearch: "",
          data: result.data,
          tile: result.title
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
        </div>
        <br />
        <div>
          <h2>Links: </h2>
        </div>
        <br />
        <div>
          <h2>Content: {this.state.title}</h2>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  comments: PropTypes.array
};
