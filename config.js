/*config will set the connection string for the database*/

const dotenv = require("dotenv");

const env = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${env}`,
});
module.exports = process.env;
