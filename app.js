//App Main point of entry

//Import express, path, ejs
const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");
const detailsRouter = require("./routes/detailsRouter");
const searchRouter = require("./routes/searchRouter");
const deleteRouter = require("./routes/deleteRouter");
const testConnection = require("./test-connection");
const { initializeDatabase, pool } = require("./initialize-db");
const env = require("./config");

// Get the connection string based on the NODE_ENV
if (env.NODE_ENV === "production") {
  connectionString = env.PRODUCTION_DATABASE_URL;
} else if (env.NODE_ENV === "development") {
  connectionString = env.LOCAL_DATABASE_URL;
} else {
  throw new Error(`Unsupported NODE_ENV: ${env.NODE_ENV}`);
}

if (!connectionString) {
  throw new Error("Connection string is not set");
}

// Now you can access the environment variables
console.log(env.LOCAL_DATABASE_URL);
console.log(env.PRODUCTION_DATABASE_URL);

//Reference an instance of express
const app = express();

//Create variable to store port value
const port = process.env.Port || 8080;

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

//Use express.urlencoded to access form data
app.use(express.urlencoded({ extended: true }));

// Call testConnection and initializeDatabase after Express app is configured
testConnection();
initializeDatabase();

//Routes
app.use("/", indexRouter);
app.use("/", formRouter);
app.use("/", detailsRouter);
app.use("/", deleteRouter);
app.use("/", searchRouter);
