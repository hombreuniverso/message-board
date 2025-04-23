/*Search Results Controller*/

//Imports
const express = require("express");
const db = require("../models/queries");

//Create search form
module.exports.getSearchForm = (req, res) => {
  res.render("searchForm", { title: "Search" });
};

//Create controller logic
module.exports.getSearchResults = async (req, res) => {
  let userSearch = req.query.search;

  let dbResults = await db.searchUsername(userSearch);

  let results = dbResults.map((name) => name.username);
  let dbName = [];

  for (let i = 0; i < results.length; i++) {
    if (results[i] == userSearch) {
      dbName.push(results[i]);
    }
  }
  if (dbName.length != 0) {
    res.render("searchResults", {
      title: "Search Results",
      results: dbName,
     // message: "",
    });
  } else {
    res.render("searchResults", {
      title: "Search Results",
      message: "No results found!",
      results: [],
    });
  }
};
/*
//Alternative way
async function getSearchResults(req, res) {}

module.exports.getSearchResults = getSearchResults;
*/
