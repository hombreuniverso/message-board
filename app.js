//App Main point of entry

//Import express, path, ejs
const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");
const detailsRouter = require("./routes/detailsRouter");

//Reference an instance of express
const app = express();

//Create variable to store port value
const port = process.env.Port || 3000;

//Create server
app.listen(port, (req, res) => {
  console.log(`Server is listening on port:${port}`);
});

//Set views path
app.set("views", path.join(__dirname, "views"));

//Register ejs engine
app.set("view engine", "ejs");

//Reference public folder assets
const assetsPath = path.join(__dirname, "public");

//Use ejs engine to look in public
//folder with express.static()
app.use(express.static(assetsPath));

//Create array of links

/*links = [
  { href: "/", text: "Homepage" },
  { href: "/new", text: "New Message" },
];
*/

//Use express.urlencoded to access form data
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", indexRouter);
app.use("/", formRouter);
app.use("/", detailsRouter);

module.exports = messages;
