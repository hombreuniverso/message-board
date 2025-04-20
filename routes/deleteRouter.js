//Delete Messages Router

//Imports
const express = require('express');
const deleteController = require('../controllers/deleteController'); 

//Reference router
const deleteRouter = express.Router();

//Create router logic
deleteRouter.get('/deleteAllMessages', deleteController.deleteAllMessages);

//Export deleteRouter
module.exports = deleteRouter;

