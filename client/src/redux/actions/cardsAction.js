import { apiCards } from '../../api/apiCards';

const FETCH_CARDS = 'FETCH_CARDS';

const typeFetchCards = (payload) => ({
  type: FETCH_CARDS,
  payload,
});

export const fetchCards = () => async (dispatch) => {
  await apiCards
    .apiFetchCards()
    .then((res) => dispatch(typeFetchCards(res.data)));
};
