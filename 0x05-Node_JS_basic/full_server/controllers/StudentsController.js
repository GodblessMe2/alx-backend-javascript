const readDatabase = require('../utils');

const arrToStr = (arr) => arr.reduce((a, b, i) => a + b + (i === arr.length - 1 ? '' : ', '), '');

class StudentsController {
  static async getAllStudents (req, res) {
    try {
      const { cs, swe } = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
      output += `Number of students in CS: ${cs.length}. List: ${arrToStr(
        cs
      )}\n`;
      output += `Number of students in SWE: ${swe.length}. List: ${arrToStr(
        swe
      )}\n`;
      res.status(200).send(output);
    } catch (err) {
      console.log(err);
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor (req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        const { cs, swe } = await readDatabase(process.argv[2]);
        res
          .status(200)
          .send(`List: ${arrToStr(major === 'CS' ? cs : swe)}`);
      } catch (err) {
        console.log(err);
        res.status(500).send('Cannot load the database');
      }
    }
  }
}

module.exports = StudentsController;
