/*Populate db*/

//Import
const { Client } = require("pg");

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
  let connectionString;

  if (process.env.NODE_ENV === "production") {
    connectionString = process.env.PRODUCTION_DATABASE_URL;
  } else {
    connectionString = process.env.LOCAL_DATABASE_URL;
  }

  console.log("seeding....");
  const client = new Client(connectionString);
  connectionString;
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("seeding complete");
}

(async () => {
  await main();
})();
