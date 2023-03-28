function getStudentsByLocation(students, city) {
  const arrayObj = students.filter((result) => result.location === city);

  return arrayObj;
}

export default getStudentsByLocation;
