/*Index Controller to render index*/
//const express = require("express");
const links = require("../links");
const db = require("../models/queries");

//Render index (homepage)
module.exports.renderIndex = async (req, res) => {
  messages = await db.getAllUsernames();
  
  res.render("index", {
    title: "Homepage",
    mainHeading: "Mini Message Board",
    messages: messages,
    linksNav: links,
  });
};
