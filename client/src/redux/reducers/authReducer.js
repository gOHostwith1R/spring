const initialState = {
  isAuth: false,
  error: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuth: !initialState.isAuth };
    case 'REGISTER': {
      return { ...state, isAuth: !initialState.isAuth };
    }
    case 'SET_ERROR':
      return { ...state, error: !initialState.error };
    default:
      return state;
  }
};
