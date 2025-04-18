//Details Controller to render details

//Imports
const express = require("express");
const links = require("../links");
const db = require("../models/db");

//Get details
module.exports.getDetails = (req, res) => {
  //Get index in query
  let index = req.query.index;
  index = Number(index);
  res.render("details", {
    title: "Details",
    mainHeading: "Details",
    index: index,
  });
  console.log(index);
};
