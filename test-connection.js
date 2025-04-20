//Imports
require("dotenv").config(); //Load environment variables
const { Pool } = require("pg");

/*If you use the object form ({ pool }), you can export multiple values by adding 
more properties to the object, like this: module.exports = { pool, anotherValue, 
yetAnotherValue };
If you use the direct form (pool), you can only export a single value.
*/


// Create connection pool using environment variables
const pool = new Pool({
    //connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
    connectionString: process.env.DATABASE_URL,
  });

// Test connection function
async function testConnection() {
  try {
    const client = await pool.connect();
    await client.query('SELECT 1');
    client.release();
    console.log('Connection test successful!');
  } catch (error) {
    console.error('Connection test failed:', error.message);
    // You may want to exit the application or retry the connection here
  }
}
module.exports = pool;
module.exports = testConnection;
