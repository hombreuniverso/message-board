<<<<<<< HEAD
//Details Controller to render details
=======
/*Details Controller to render details*/
>>>>>>> a1d6dbe3cbb13d9af7d35a6e6a28d5549456c739

//Imports
const express = require("express");
const links = require("../links");
const db = require("../models/db");
<<<<<<< HEAD

=======
const messages = db.messages;   
>>>>>>> a1d6dbe3cbb13d9af7d35a6e6a28d5549456c739

//Get details
module.exports.getDetails = (req, res) => {
        //Get index in query
        let index = req.query.index;
        index = Number(index);
        res.render("details", {
            title: "Details",
            mainHeading: "Details",
            index: index,
<<<<<<< HEAD
            
        });
        console.log(index);
=======
        });
>>>>>>> a1d6dbe3cbb13d9af7d35a6e6a28d5549456c739
    };

