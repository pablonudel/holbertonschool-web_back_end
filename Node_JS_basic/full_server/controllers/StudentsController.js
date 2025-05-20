import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(request.app.get('database'));
      
      let output = 'This is the list of our students\n';
      
      if (Object.keys(data).length === 0) {
        output += 'No students in database';
      } else {
        for (const [field, students] of Object.entries(data)) {
          output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }
      }
      response.status(200).send(output.trim());
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
      const data = await readDatabase(request.app.get('database'));
      if (Object.keys(data).length === 0) {
        response.status(200).send('No students in database');
      } else {
        response.status(200).send(`List: ${data[major].join(', ')}`);
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
}

export default StudentsController;
