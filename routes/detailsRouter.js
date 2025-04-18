//Details router

//Import express
const express = require("express");
const detailsController = require("../controllers/detailsController");

//Create instance of router
const detailsRouter = express.Router();


//Router logic
detailsRouter.get("/details", detailsController.getDetails);

//Export detailsRouter
module.exports = detailsRouter;
