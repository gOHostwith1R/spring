import { apiAuth } from '../../api/apiAuth';

const TYPE_LOGIN = 'LOGIN';
const TYPE_REGISTER = 'REGISTER';
const SET_ERROR = 'SET_ERROR';

export const typeLogin = ({
  type: TYPE_LOGIN,
});

export const typeRegister = ({
  type: TYPE_REGISTER,
});

export const typeErrorAuth = ({
  type: SET_ERROR,
});

export const authLogin = ({ userName, password }) => async (dispatch) => {
  try {
    await apiAuth.apiAuthLogin(userName, password);
    dispatch(typeLogin);
  } catch (e) {
    dispatch(typeErrorAuth);
  }
};

export const authRegister = ({
  userName, password, repeatPassword, firstName, lastName, age,
}) => async (dispatch) => {
  try {
    await apiAuth.apiAuthRegister(userName, password, repeatPassword, firstName, lastName, age);
    dispatch(typeRegister);
  } catch (e) {
    dispatch(typeErrorAuth);
  }
};
