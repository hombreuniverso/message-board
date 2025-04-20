/*Query with pg: create 2 query functions 

1. Getting all usernames
2. Inserting messages
4. Delete all messages i.e all rows in table
3. Delete table 
*/

//Imports
const { pool } = require("../initialize-db");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessages(username, snippet, details) {
  await pool.query(
    `INSERT INTO messages (username, snippet, details, added) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)`,
    [username, snippet, details]
  );
}

/* Use TRUNCATE for deleting all rows
Use DELETE for deleting specific rows
*/
async function deleteAllMessages() {
  await pool.query(`TRUNCATE TABLE messages`);
}

async function deleteTable() {
  await pool.query(`DROP TABLE IF EXISTS messages`);
}

module.exports = {
  getAllUsernames,
  insertMessages,
  deleteAllMessages,
  deleteTable,
  // deleteAllUsernames,
  // searchUsername,
};
