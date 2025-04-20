//Imports
require("dotenv").config(); //Load environment variables
const { Pool } = require("pg");

// Create connection pool using environment variables
const pool = new Pool({
  //connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
  connectionString: process.env.DATABASE_URL,
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
    console.error("Database initialization failed:", error.message);
  }
  //Call the initializeDatabase function in app.js file
  //to return the pool object which can be used to perform
  //database queries.
  return pool;
}

module.exports = { initializeDatabase, pool };
