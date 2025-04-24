//Imports
require("dotenv").config(); //Load environment variables
const { Pool } = require("pg");
const config = require("./config");

/*
//Set up environment variables
if (!config.NODE_ENV) {
  config.NODE_ENV = "development"; // default to development if not set
}
  */


// Create connection pool using environment variables
let connectionString;

if (process.env.NODE_ENV === "production") {
  connectionString = process.env.PRODUCTION_DATABASE_URL;
} else if (process.env.NODE_ENV === "development") {
  connectionString = process.env.LOCAL_DATABASE_URL;
} else {
  throw new Error(`Unsupported NODE_ENV: ${process.env.NODE_ENV}`);
}

if (!connectionString) {
  throw new Error("Connection string is not set");
}
const pool = new Pool({
  connectionString: connectionString,

});


/* If you use the object form ({ pool }), you can export multiple values by adding 
more properties to the object, like this: module.exports = { pool, anotherValue, 
yetAnotherValue };
If you use the direct form (pool), you can only export a single value.
*/
//module.exports = pool;

//Intialize database

async function initializeDatabase() {
  try {
    // const client = await pool.connect();
    // Create table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR (255),
        snippet TEXT,
        details TEXT,
        added DATE
      )
    `);
    console.log("Table created or already exists");

    // Insert sample data
    /*
    await pool.query(`INSERT INTO usernames (username)
      VALUES
        ('Bryan'),
        ('Odin'),
        ('Damon')
    `);
    console.log("Added sample users");
*/
    //pool.release();
  } catch (error) {
    console.error(
      "Database initialization failed:",
      error.message,
      "Connection string:",
      connectionString
    );
  }
  //Call the initializeDatabase function in app.js file
  //to return the pool object which can be used to perform
  //database queries.
  return pool;
}

module.exports = { initializeDatabase, pool };
