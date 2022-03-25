import { apiAuth } from '../../api/apiAuth';

export const typeAuth = ({
  type: 'LOGIN',
});

export const authLogin = (userName, password) => async (dispatch) => {
  await apiAuth.apiAuthLogin(userName, password)
    .then(() => dispatch(typeAuth));
};
