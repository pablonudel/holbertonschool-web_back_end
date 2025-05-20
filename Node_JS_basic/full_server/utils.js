import fs from 'fs/promises';

export default async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim());

    if (lines.length === 0) {
      return {};
    }

    const [header, ...entries] = lines;
    const headers = header.split(',');

    const grouped = {};

    for (const line of entries) {
      const values = line.split(',');
      const student = headers.reduce((obj, key, i) => {
        obj[key] = values[i];
        return obj;
      }, {});

      const field = student.field;
      if (field) {
        if (!grouped[field]) {
          grouped[field] = [];
        }
        grouped[field].push(student.firstname);
      }
    }

    return grouped;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}