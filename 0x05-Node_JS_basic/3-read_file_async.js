const fs = require('fs');

async function countStudents (path) {
  try {
    await fs.readFile(path, (err, data) => {
      if (err) throw new Error('Cannot load the database');
      if (data) {
        let newData = data.toString().split('\n');
        newData = newData.slice(1, newData.length - 1);
        console.log(`Number of students: ${newData.length}`);
        const obj = {};
        newData.forEach((el) => {
          const student = el.split(',');
          if (!obj[student[3]]) obj[student[3]] = [];
          obj[student[3]].push(student[0]);
        });
        for (const cls in obj) {
          if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
        }
      }
    });
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
