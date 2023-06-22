const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'BlackFenix07',
    password: 'Gamer.2023*',
    database: 'my-store',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
