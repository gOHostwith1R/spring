import { apiAuth } from '../../api/apiAuth';
import { setLocalItem } from '../../helpers';

const TYPE_LOGIN = 'LOGIN';
const TYPE_REGISTER = 'REGISTER';
const SET_ERRORS = 'SET_ERRORS';
const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const typeLogin = ({
  type: TYPE_LOGIN,
});

export const typeRegister = ({
  type: TYPE_REGISTER,
});

export const clearErrors = ({
  type: CLEAR_ERRORS,
});

export const typeErrorAuth = (payload) => ({
  type: SET_ERRORS,
  payload,
});

export const authLogin = ({ userName, password }) => async (dispatch) => {
  try {
    const res = await apiAuth.apiAuthLogin(userName, password);
    const { accessToken, refreshToken } = res.data;
    setLocalItem('access', accessToken);
    setLocalItem('refresh', refreshToken);
    dispatch(typeLogin);
  } catch (e) {
    dispatch(clearErrors);
    dispatch(typeErrorAuth(e.response.data));
  }
};

export const authRegister = ({
  userName, password, repeatPassword, firstName, lastName, age,
}) => async (dispatch) => {
  try {
    const res = await apiAuth.apiAuthRegister(
      userName,
      password,
      repeatPassword,
      firstName,
      lastName,
      age,
    );
    const { accessToken, refreshToken } = res.data;
    setLocalItem('access', accessToken);
    setLocalItem('refresh', refreshToken);
    dispatch(typeRegister);
  } catch (e) {
    dispatch(clearErrors);
    dispatch(typeErrorAuth(e.response.data));
  }
};
