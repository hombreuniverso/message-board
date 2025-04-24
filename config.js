module.exports = new Promise((resolve, reject) => {
  const dotenv = require("dotenv");
  const env = process.env.NODE_ENV || "development";
  dotenv.config({
    path: `.env.${env}`,
  });

  const config = {
    NODE_ENV: env,
    LOCAL_DATABASE_URL: process.env.LOCAL_DATABASE_URL,
    PRODUCTION_DATABASE_URL: process.env.PRODUCTION_DATABASE_URL,
  };

  resolve(config);
});
