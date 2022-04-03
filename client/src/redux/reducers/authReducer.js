const initialState = {
  isAuth: localStorage.getItem('access'),
  errors: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuth: !initialState.isAuth };
    case 'REGISTER': {
      return { ...state, isAuth: !initialState.isAuth };
    }
    case 'SET_ERRORS': {
      if (typeof action.payload.message === 'string') {
        return { ...state, errors: [...state.errors, action.payload.message] };
      }
      return { ...state, errors: [...state.errors, ...action.payload.message] };
    }
    case 'CLEAR_ERRORS': {
      return { ...state, errors: [] };
    }
    default:
      return state;
  }
};
