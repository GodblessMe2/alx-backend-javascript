const http = require('http');
const countStudents = require('./3-read_file_async');

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      response.end(outString);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

server.listen(1245);

module.exports = server;
