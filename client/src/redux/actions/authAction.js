import { apiAuth } from '../../api/apiAuth';

export const typeAuth = ({
  type: 'LOGIN',
});

export const typeErrorAuth = ({
  type: 'SET_ERROR',
});

export const authLogin = (userName, password) => async (dispatch) => {
  try {
    await apiAuth.apiAuthLogin(userName, password);
    dispatch(typeAuth);
  } catch (e) {
    dispatch(typeErrorAuth);
  }
};
