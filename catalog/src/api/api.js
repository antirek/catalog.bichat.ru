import resource from 'resource-axios';
import axios from 'axios';

const Book = resource('/api/books', axios);
const User = resource('http://localhost:3100/', {
  login: (mobile, code) => axios.post(`http://localhost:3100/login`, {
    mobile,
    code,
  }),
}, axios);

export {
  Book,
  User,
}