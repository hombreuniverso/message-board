/*Index Controller to render index*/
const express = require("express");
const links = require("../links");
const db = require("../models/db");
<<<<<<< HEAD

=======
const messages = db.messages;
>>>>>>> a1d6dbe3cbb13d9af7d35a6e6a28d5549456c739

//Index Router logic

module.exports.renderIndex = (req, res) => {
    res.render("index", {
      title: "Homepage",
      mainHeading: "Mini Message Board",
      messages: messages,
      linksNav: links,
<<<<<<< HEAD
      //index: index,
=======
>>>>>>> a1d6dbe3cbb13d9af7d35a6e6a28d5549456c739
    });
  }