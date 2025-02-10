//App Main point of entry

//Import express, path, ejs
const express = require("express");
const path = require("node:path");
const IndexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

//Reference an instance of express
const app = express();

//Create variable to store port value
const port = 3000;

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

//Routes
app.use("/", IndexRouter);
app.use("/", newMessageRouter);

