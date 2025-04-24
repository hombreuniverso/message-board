// config.js
module.exports = new Promise((resolve, reject) => {
  const dotenv = require("dotenv");
  const env = process.env.NODE_ENV || "development";
  dotenv.config({
    path: `.env.${env}`,
  });

  if (env === "production") {
    process.env.PRODUCTION_DATABASE_URL = `postgres://colin:npg_6AhcZBvfu1gC@ep-divine-frog-a2ywuvk3.eu-central-1.pg.koyeb.app/messageboard?sslmode=require`;
  }

  resolve(process.env);
});
