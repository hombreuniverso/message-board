/*Forms Controller to render forms*/
const links = require("../links");
const db = require("../models/queries");
const { body, validationResult } = require("express-validator");

//Get forms
module.exports.getForm = (req, res) => {
  res.render("form", {
    title: "Form",
    mainHeading: "Form",
    linksNav: links,
  });
};

//Validation and sanitization
const validateUser = [
  body("username")
    .trim()
    .isLength({ min: 3, max: 15 })
    .withMessage("Username must be between 3 and 15 characters"),

  body("snippet")
    .trim()
    .isLength({ min: 5, max: 15 })
    .withMessage("Snippet must be between 5 and 15 characters"),

  body("details")
    .trim()
    .isLength({ min: 10, max: 500 })
    .withMessage("Details must be between 10 and 500 characters"),
  // .matches(/^[a-zA-Z0-9\s\.,!?]+$/) more restrictive
  //.matches(/^[a-zA-Z0-9\s\.,!?@#$%^&*()_+-={}:<>?\/]+$/) less restrictive
  //  .withMessage(
  //  "Details can only contain alphanumeric characters, spaces, and certain punctuation marks"
  //  )
  ,
];

//Create username async function
async function postForm(req, res) {
  try {
    await Promise.all(validateUser.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("error", {
        title: "Error 404",
        //Note that the validationResult will
        //be an array of errors
        errors: errors.array(),
        message: "",
      });
    } else {
      //Use req.body to access form data via "name"
      username = req.body.username;
      snippet = req.body.snippet;
      details = req.body.details;

      await db.searchUsername(username);
      let dbName = await db.searchUsername(username);
      let storedName = dbName.map((name) => name.username);
      await db.insertMessages(username, snippet, details);
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
    res.status(500).render("error", {
      title: "Error",
      errors: [],
      message: "An error occurred while creating the message.",
    });
  }
}

module.exports.postForm = postForm;

//Post forms
/* Two (2) ways to export an async function:

1.  async function postForm(req, res) => {

  }
  module.exports.postForm = postForm;
  

2.  module.exports.postForm = async (req, res) => {

} 
*/
