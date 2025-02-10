//IndexRouter

//Import express
const express = require('express');

//Reference router
const IndexRouter = express.Router();

//Create router logic
IndexRouter.get('/', (req, res) =>{
    res.render('index', {title: "Homepage", mainHeading: "Mini Message Board", messages: messages});
})

//Export indexRouter
module.exports = IndexRouter;