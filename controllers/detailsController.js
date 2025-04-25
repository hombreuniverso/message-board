//Details Controller to render details

//Imports
const links = require("../links");

//Get details
module.exports.getDetails = (req, res) => {
  //Get index in query
  let index = req.query.index;
  index = Number(index);
  res.render("details", {
    title: "Details",
    mainHeading: "Details",
    index: index,
  });

};
