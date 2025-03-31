export default function getStudentsByLocation(students, city) {
  const newList = [];
  for (const student of students) {
    if (student.location === city) {
      newList.push(student);
    }
  }
  return newList;
}
