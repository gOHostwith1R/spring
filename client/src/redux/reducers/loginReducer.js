const initialState = {
  isAuth: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuth: !initialState.isAuth };
    default:
      return state;
  }
};
