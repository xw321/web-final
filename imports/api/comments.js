import { Meteor } from "meteor/meteor";
// import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
//import { HTTP } from "meteor/http";
//import { EJSON } from "meteor/ejson";
import wikipedia from "node-wikipedia";

//const wikipedia = require("node-wikipedia");

Meteor.methods({
  searchWiki(term) {
    check(term, String);

    if (Meteor.isServer) {
      return new Promise((resolve, reject) => {
        wikipedia.page.data(term, { content: true }, resolve);
      });

      // return wikipedia.page.data("Clifford_Brown", { content: true }, function(
      //   response
      // ) {
      //   return response;
      //   // structured information on the page for Clifford Brown (wikilinks, references, categories, etc.)
      // });
    }
  }
});
