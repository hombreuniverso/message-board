/*Forms Controller to render forms*/
const express = require("express");
const links = require("../links");
const db = require("../models/queries");

//Get forms
module.exports.getForm = (req, res) => {
  res.render("form", {
    title: "Form",
    mainHeading: "Form",
    linksNav: links,
  });
};

//Post forms
/* Two (2) ways to export an async function:

1.  async function postForm(req, res) => {

  }
  module.exports.postForm = postForm;
  

2.  module.exports.postForm = async (req, res) => {

}
  

*/

async function postForm(req, res) {
  try {
    //Use req.body to access form data via "name"
    username = req.body.username;
    snippet = req.body.snippet;
    details = req.body.details;

    await db.searchUsername(username);
    let dbName = await db.searchUsername(username);
    let storedName = dbName.map((name) => name.username);
    await db.insertMessages(username, snippet, details);
      res.redirect("/");
   /*
    if (storedName == username) {
      res.send("Username already taken! Choose another name");
    } else {
      await db.insertMessages(username, snippet, details);
      res.redirect("/");
    }
    */
  } catch (error) {
    console.log(error);
    res.status(500).render("error", {
      title: "Error",
      errors: [],
      message: "An error occurred while creating the message.",
    });
  }
}

/*module.exports.postForm = (req, res) => {
  //Use req.body to access form data via "name"
  username = req.body.username;
  snippet = req.body.snippet;
  details = req.body.details;
  date = new Date().toDateString();
 
  messages.push({
    id: db.messages.length,
    username: username,
    snippet: snippet,
    details: details,
    added: date,
  });
  console.log(db);
  res.redirect("/");
};
*/

module.exports.postForm = postForm;
