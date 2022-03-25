import { authAction } from '../actions';

export const apiAuth = () => (dispatch) => {
  fetch('http://localhost:5000/api/user/login')
    .then((response) => response.json())
    .then((json) => dispatch(authAction(json)));
};
