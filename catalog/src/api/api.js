import resource from 'resource-axios';
import axios from 'axios';

const Book = resource('/api/books', axios);
const User = resource('http://localhost:3100/', {
  login: async (mobile, code) => await axios.post(`http://localhost:3100/login`, {
    mobile,
    code,
  }),
}, axios);

const Company = resource('http://localhost:3100/companies', axios);

export {
  Book,
  User,
  Company,
}