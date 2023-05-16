const http = require('http');
const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const server = http.createServer(async (req, res) => {
  const pathname = req.url;
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');

  if (pathname === '/') {
    res.write('Hello Holberton School!');
  } else if (pathname === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(1245, '127.0.0.1');

module.exports = server;
