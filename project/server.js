const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gradebook_Jordan',
  password: 'password',
  port: 5432,
});

app.use(express.static('public'));

app.get('/api/grades', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.first_name, s.last_name, a.title, a.description, a.due_date
      FROM students s
      JOIN assignments a ON s.student_id = a.student_id;
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).send('Error fetching grades');
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

