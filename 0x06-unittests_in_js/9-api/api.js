const express = require('express');

const app = express();
app.get('/', (rq, rs) => {
  rs.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (rq, rs) => {
  rs.send(`Payment methods for cart ${rq.params.id}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;