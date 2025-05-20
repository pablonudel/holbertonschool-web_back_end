import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(request.app.get('database'));
      
      let output = 'This is the list of our students';
      
      if (Object.keys(data).length === 0) {
        output += '\nNo students in database';
      } else {
        for (const field in data) {
          const students = data[field];
          output += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
        }
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
      const data = await readDatabase(request.app.get('database'));
      const students = data[major]
      if (!students) {
        return res.status(500).send('Cannot load the database');
      }

      return response.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
}

export default StudentsController;
