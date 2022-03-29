const initialState = {
  cards: [],
  loading: false,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CARDS':
      return { ...state, cards: [...state.cards, ...action.payload] };
    case 'SET_LOADING': {
      return { ...state, loading: !state.loading };
    }
    default:
      return state;
  }
};
