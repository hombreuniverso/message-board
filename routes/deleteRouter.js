//Delete Messages Router

//Imports
const express = require('express');
const deleteController = require('../controllers/deleteController'); 

//Reference router
const deleteRouter = express.Router();

//Create router logic
deleteRouter.get('/deleteUser', deleteController.getDeleteUserConfirmation);
deleteRouter.get('/delete', deleteController.getDeleteConfirmation);
deleteRouter.post('/deleteAllMessages', deleteController.deleteAllMessages);
deleteRouter.post('/deleteUserMessage', deleteController.deleteUserMessage);
//Export deleteRouter
module.exports = deleteRouter;

