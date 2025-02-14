//New Mesage Router

//Import express
const express = require("express");
const { title } = require("process");

//Reference router
const formRouter = express.Router();

formRouter.get("/new", (req, res) => {
  res.render("form", { title: "Form", mainHeading: "Form" });
});

formRouter.post("/new", (req, res) => {
  //Use req.body to access form data via "name"
  user = req.body.user;
  snippet = req.body.snippet;
  details = req.body.details;
  date = new Date().toDateString();
  messages.push({
    user: user,
    snippet: snippet,
    details: details,
    added: date,
  });
  console.log(messages);
  res.redirect("/");
});

//Export newMessageRouter
module.exports = formRouter;
