import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(request.app.get('database'));
      let output = 'This is the list of our students';

      const sortedFields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      
      for (const field of sortedFields) {
        const students = data[field];  
        output += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      }

      return response.status(200).send(output);
    } catch (error) {
      return response.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(request.app.get('database'));
      const students = data[major]
      if (!students) {
        return response.status(500).send('Cannot load the database');
      }

      return response.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      return response.status(500).send(error.message);
    }
  }
}

export default StudentsController;
