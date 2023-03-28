function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  const cityStudents = students.filter((student) => student.location === city).map((student) => {
    const newGrade = newGrades.find((student2) => student.id === student2.studentId);
    return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
  });
  return cityStudents;
}

export default updateStudentGradeByCity;
