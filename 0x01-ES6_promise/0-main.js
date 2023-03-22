import getResponseFromAPI from '../0x01-ES6_promise/0-promise';

const response = getResponseFromAPI();
console.log(response instanceof Promise);
