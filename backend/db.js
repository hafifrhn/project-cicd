const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  host: 'db',
  database: 'mydb',
  password: 'password',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
