function getStudentIdsSum(students) {
  const ids = students.map((id) => id.id);
  const sum = ids.reduce((accumulator, currentValue) => accumulator + currentValue);

  return sum;
}

export default getStudentIdsSum;
