const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'BlackFenix07',
  password: 'Gamer.2023*',
  database: 'my-store',
});

module.exports = pool;
