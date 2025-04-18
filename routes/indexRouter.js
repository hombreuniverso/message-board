//IndexRouter

//Import express
const express = require("express");
const indexController = require("../controllers/indexController");

//Reference router
const IndexRouter = express.Router();

//Create router logic
IndexRouter.get("/", indexController.renderIndex);

//Export indexRouter
module.exports = IndexRouter;
