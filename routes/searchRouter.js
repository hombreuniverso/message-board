/*Search Router*/

//Import express
const express = require("express");
const searchResultsController = require("../controllers/searchController");

const searchRouter = express.Router();

//Get search form path
searchRouter.get("/searchForm", searchResultsController.getSearchForm);

//Get search path
searchRouter.get("/search", searchResultsController.getSearchResults);



//Export searchRouter
module.exports = searchRouter;