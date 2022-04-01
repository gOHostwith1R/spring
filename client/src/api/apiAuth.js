import axios from 'axios';

export const apiAuth = {
  apiAuthLogin: (userName, password) => axios.post('http://localhost:5000/api/user/login', { userName, password }),
  apiAuthRegister: (userName, password, repeatPassword, firstName, lastName, age) => axios.post('http://localhost:5000/api/user/register', {
    userName, password, repeatPassword, firstName, lastName, age,
  }),
};
