import { cardsData } from '../../constants';

const initialState = {
  cards: cardsData,
};

export const cardsReducer = (state = initialState) => state;
