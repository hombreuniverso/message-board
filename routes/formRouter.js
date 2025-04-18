//New Mesage Router

//Import express
const express = require("express");
const formsController = require("../controllers/formsController");
const { title } = require("process");

//Reference router
const formRouter = express.Router();

formRouter.get("/new", formsController.getForm);

formRouter.post("/new", formsController.postForm);

//Export newMessageRouter
module.exports = formRouter;
