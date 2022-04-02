import axios from 'axios';
// import { api } from './axiosConfig';

export const apiAuth = {
  apiAuthLogin: (userName, password) => axios.post('http://localhost:5000/api/user/login', { userName, password }),
  apiAuthRegister: (userName, password, repeatPassword, firstName, lastName, age) => axios.post('http://localhost:5000/api/user/registration', {
    userName, password, repeatPassword, firstName, lastName, age,
  }),
  apiAuthRefreshToken: () => axios.get('http://localhost:5000/api/user/refresh'),
};
