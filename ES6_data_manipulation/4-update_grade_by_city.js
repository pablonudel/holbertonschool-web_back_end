export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((students) => students.location === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = !newGrade ? 'N/A' : newGrade.grade;
      return { ...student, grade };
    });
}
