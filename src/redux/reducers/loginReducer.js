const initialState = {
  isAuth: false,
};

export const loginReducer = (action, state = initialState) => {
  console.log(state.isAuth, action);
};
