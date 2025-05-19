const fs = require('fs').promises;

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

    dataString = `Number of students: ${rows.length}`;
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
