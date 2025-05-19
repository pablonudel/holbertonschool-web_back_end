const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const db = process.argv.slice(2)[0];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain;charset=utf-8');
  res.write('This is the list of our students\n');
  try {
    const students = await countStudents(db);
    res.end(students);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
