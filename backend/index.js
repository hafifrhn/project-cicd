const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.send(`Hello from backend! DB time: ${result.rows[0].now}`);
  } catch (err) {
    console.error('DB query error:', err);
    res.status(500).send('Database error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
