import readDatabase from '../utils';

const db = '../database.csv'

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(db);
      
      let output = 'This is the list of our students';
      for (const [field, students] of Object.entries(data)) {
        output += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      }
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(db);
      response.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
}

export default StudentsController;