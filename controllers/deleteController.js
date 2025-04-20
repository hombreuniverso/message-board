//Delete Messages Controller

//Imports
const express = require("express");
const db = require("../models/queries");

//Delete all messages
async function deleteAllMessages (req, res)  {
  try {
    console.log('Is it working?');
    await db.deleteAllMessages();
    res.render("delete", {
      title: "All Users Are Deleted",
     
    });
  } catch (error) {
    console.log(error);
    res.send(error);

  }
}

module.exports.deleteAllMessages = deleteAllMessages;
