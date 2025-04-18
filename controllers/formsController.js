/*Forms Controller to render forms*/
const express = require("express");
const links = require("../links");
const db = require("../models/db");
const messages = db.messages;

//Get forms
module.exports.getForm = (req, res) => {
    res.render("form", {
      title: "Form",
      mainHeading: "Form",
      linksNav: links,
    });  
};

//Post forms
module.exports.postForm = (req, res) => {
    //Use req.body to access form data via "name"
    user = req.body.user;
    snippet = req.body.snippet;
    details = req.body.details;
    date = new Date().toDateString();
<<<<<<< HEAD
    messages.push({       
      id: messages.length,
=======
    messages.push({
>>>>>>> a1d6dbe3cbb13d9af7d35a6e6a28d5549456c739
      user: user,
      snippet: snippet,
      details: details,
      added: date,
    });
    console.log(messages);
    res.redirect("/");
  };



