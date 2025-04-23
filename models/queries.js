/*Query with pg: create 6 query functions 

1. Getting all usernames
2. Inserting messages
3. Search username
4. Delete a username
5. Delete all messages i.e all rows in table
6. Delete table 
*/

//Imports
const { pool } = require("../initialize-db");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessages(username, snippet, details) {
  if (!username || !snippet || !details) {
    throw new Error("Username, snippet, and details are required to insert a message");
  }
  await pool.query(
    `INSERT INTO messages (username, snippet, details, added) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *`,
    [username, snippet, details]
  );
}


async function searchUsername(username){
  if (!username) {
    throw new Error("Username is required to search for a user");
  }
const {rows} = await pool.query(
  "SELECT username FROM messages WHERE username  = $1", [username]);
return rows;
}

//Delete a user
async function deleteUserMessage(username, id){
  if (!username || !id) {
    throw new Error("Username and ID are required to delete a message");
  }
  await pool.query(
    `DELETE FROM messages WHERE username = $1  AND id = $2`, [username, id]);
  }


/* Use TRUNCATE for deleting all rows
Use DELETE for deleting specific rows
*/
async function deleteAllMessages() {
  await pool.query("TRUNCATE TABLE messages RESTART IDENTITY CASCADE");
}

async function deleteTable() {
  await pool.query("DROP TABLE IF EXISTS messages");
}

module.exports = {
  getAllUsernames,
  insertMessages,
  searchUsername,
  deleteUserMessage,
  deleteAllMessages,
  deleteTable,
 
};
