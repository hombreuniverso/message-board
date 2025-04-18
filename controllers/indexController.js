/*Index Controller to render index*/
const express = require("express");
const links = require("../links");
const db = require("../models/db");
const messages = db.messages;

//Index Router logic

module.exports.renderIndex = (req, res) => {
    res.render("index", {
      title: "Homepage",
      mainHeading: "Mini Message Board",
      messages: messages,
      linksNav: links,
    });
  }