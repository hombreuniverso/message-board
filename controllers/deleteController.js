//Delete Messages Controller

//Imports
const express = require("express");
const db = require("../models/queries");

//Get delete username confirmation
module.exports.getDeleteUserConfirmation = async (req, res) => {
  let index = req.query.index;
  const allUsers = await db.getAllUsernames();
  let user = allUsers[index].username;
  //console.log(index);
  //console.log(user);
  res.render("deleteUserConfirmation", {
    title: `Delete ${user}'s Message`,
    message: `Are you sure that you want to delete ${user}'s message? This action cannot be undone!`,
  });
};

//Get delete all messages confirmation
module.exports.getDeleteConfirmation = (req, res) => {
  res.render("deleteConfirmation", {
    title: "Delete All Users' Messages",
    message:
      "Are you sure you want to delete all users' messages? This action cannot be undone!",
  });
};

//Delete user message
async function deleteUserMessage(req, res) {
  try {
    let index = Number(req.query.index);
    let id = req.query.id;
    console.log(index);
    console.log(id);
    let user = await db.getAllUsernames();   
    await db.deleteUserMessage(user[index].username, id);
    res.render("delete", {
      title: "User Deleted",
    });
  } catch (error) {
    res.send(error);
  }
}

//Delete all messages
async function deleteAllMessages(req, res) {
  try {
    await db.deleteAllMessages();
    res.render("delete", {
      title: "All Users Are Deleted",
    });
  } catch (error) {
    res.send(error);
  }
}

module.exports.deleteAllMessages = deleteAllMessages;
module.exports.deleteUserMessage = deleteUserMessage;
