/*Populate db*/

//Import
const { clent, Client } = require("pg");

//Create username table
const SQL = `
CREATE TABLE IF NOT EXISTS messages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
snippet TEXT,
details TEXT,
added DATE
);
`;
console.log(SQL);

async function main() {
  console.log("seeding....");
  const client = new Client({
    connectionString:
      "postgresql://colin:Marriage@localhost:5432/message-board",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("seeding complete");
}

main();
