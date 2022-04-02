import { apiAuth } from '../../api/apiAuth';
import { setLocalItem } from '../../helpers';

const TYPE_LOGIN = 'LOGIN';
const TYPE_REGISTER = 'REGISTER';
const SET_ERROR = 'SET_ERROR';
const TYPE_REFRESH_TOKEN = 'REFRESH_TOKEN';

export const typeLogin = ({
  type: TYPE_LOGIN,
});

export const typeRegister = ({
  type: TYPE_REGISTER,
});

export const typeErrorAuth = ({
  type: SET_ERROR,
});

export const typeRefreshToken = ({
  type: TYPE_REFRESH_TOKEN,
});

export const authLogin = ({ userName, password }) => async (dispatch) => {
  try {
    const res = await apiAuth.apiAuthLogin(userName, password);
    const { accessToken, refreshToken } = res.data;
    setLocalItem('access', accessToken);
    setLocalItem('refresh', refreshToken);
    dispatch(typeLogin);
  } catch (e) {
    dispatch(typeErrorAuth);
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
    dispatch(typeErrorAuth);
  }
};

export const fetchRefreshToken = async () => {
  const res = await apiAuth.apiAuthRefreshToken();
  console.log(res);
};
