const fs = require('fs');

const aggregate = (data) => data.slice(1).reduce(
  (a, b) => {
    const [first, , , field] = b.split(',');
    if (field === 'CS') {
      a.cs.push(first);
    } else if (field === 'SWE') a.swe.push(first);
    return a;
  },
  { cs: [], swe: [] }
);
const readDatabase = (path) => async (req, res) => {
  try {
    fs.readFile(path, 'utf-8', (err, res) => {
      if (err) throw new Error('Cannot load the database');
      return aggregate(res.split('\n'));
    });
  } catch (err) {
    return new Error('Cannot load the database');
  }
};

module.exports = readDatabase;
