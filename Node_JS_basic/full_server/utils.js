import fs from 'fs/promises';

export default async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const rows = data.trim().split('\n').slice(1);
    const fields = {};

    if (rows.length <= 1) {
      return fields;
    }

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

    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
