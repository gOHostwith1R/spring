const initialState = {
  cards: [],
};

export const cardsReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'FETCH_CARDS':
      return { ...state, cards: [...state.cards, ...action.payload] };
    default:
      return state;
  }
};
