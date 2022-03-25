import { fetchCards } from '../actions';

export const apiCards = async (dispatch) => {
  fetch('http://localhost:5000/api/cards')
    .then((response) => response.json())
    .then((json) => dispatch(fetchCards(json)));
};
