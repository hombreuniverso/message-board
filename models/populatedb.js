/*Populate db*/

//Import
const { Client } = require("pg");
const env = require('./config');

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
 // Create connection pool using environment variables
 let connectionString;
 
 if (env.NODE_ENV === "production") {
   connectionString = process.env.PRODUCTION_DATABASE_URL + '?sslmode=require';
 } else if (env.NODE_ENV === "development") {
   connectionString = process.env.LOCAL_DATABASE_URL;
 } else {
   throw new Error(`Unsupported NODE_ENV: ${process.env.NODE_ENV}`);
 }
 
 if (!connectionString) {
   throw new Error("Connection string is not set");
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
