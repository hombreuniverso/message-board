//New Mesage Router

//Import express 
const express = require('express');

//Reference router
const newMessageRouter = express.Router();

newMessageRouter.get("/new", (req, res)=>{
    res.render('newMessage');
})

//Export newMessageRouter
module.exports = newMessageRouter;