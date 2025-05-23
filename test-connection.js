//Imports
require("dotenv").config(); //Load environment variables
const { Client } = require("pg");
const env = require("./config");


/*If you use the object form ({ pool }), you can export multiple values by adding 
more properties to the object, like this: module.exports = { pool, anotherValue, 
yetAnotherValue };
If you use the direct form (pool), you can only export a single value.
*/

// Set the connection string based on the NODE_ENV
let connectionString;

if (process.env.NODE_ENV === "production") {
  connectionString = process.env.PRODUCTION_DATABASE_URL + "?sslmode=require";
} else if (process.env.NODE_ENV === "development") {
  connectionString = process.env.LOCAL_DATABASE_URL;
} else {
  throw new Error(`Unsupported NODE_ENV: ${process.env.NODE_ENV}`);
}

if (!connectionString) {
  throw new Error("Connection string is not set");
}

// Test connection function
async function testConnection() {
  const client = new Client(connectionString);
  try {
    //const client = await pool.connect();
    //await client.query("SELECT 1");

    await client.connect();
    console.log("Connection test successful!");
  } catch (error) {
    console.error("Connection test failed:", error.message);
    // You may want to exit the application or retry the connection here
  }
  //Return the client instance
  return client;
}

/*
  //Alternate approach of ending and recreating a new instance of Client
  async function testConnection() {
    const client = new Client(connectionString);
    try {
      await client.connect();
      console.log("Database connection successful");
    } catch (err) {
      console.error("Database connection failed:", err);
    } finally {
      await client.end();
    }
  }
  
  async function queryDatabase() {
    const client = new Client(connectionString);
    try {
      await client.connect();
      const result = await client.query("SELECT * FROM messages");
      console.log(result.rows);
    } catch (err) {
      console.error("Database query failed:", err);
    } finally {
      await client.end();
    }
  }

  module.exports = { testConnection, queryDatabase};
*/

//module.exports = { testConnection };

module.exports = testConnection;
