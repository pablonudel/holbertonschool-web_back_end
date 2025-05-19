const fs = require('node:fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const rows = data.trim().split('\n').slice(1);
    const fields = {};
    let dataString = '';

    rows.forEach((row) => {
      const columns = row.split(',');
      const [firstname, , , field] = columns;
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
      }
      fields[field].push(firstname);
    });

    const totalStudents = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
    console.log(`Number of students: ${totalStudents}`);
    dataString = `Number of students: ${totalStudents}`;

    for (const [field, students] of Object.entries(fields)) {
      dataString += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
    }

    console.log(fields);
    console.log(dataString);
    return dataString;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
