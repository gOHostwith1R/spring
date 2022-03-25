import axios from 'axios';

export const apiAuth = {
  apiAuthLogin: (userName, password) => axios.post('http://localhost:5000/api/user/login', { userName, password }),
};
