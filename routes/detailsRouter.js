//Details router

//Import express
const express = require("express");

//Create instance of router
const detailsRouter = express.Router();

//Router logic
detailsRouter.get("/details", (req, res) => {
  //Get index in query
  let index = req.query.index;
   index = Number(index);
  res.render("details", {
    title: "Details",
    mainHeading: "Details",
    index: index,
  });
});

//Export detailsRouter
module.exports = detailsRouter;
