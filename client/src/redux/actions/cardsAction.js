import { apiCards } from '../../api/apiCards';

const FETCH_CARDS = 'FETCH_CARDS';

const typeFetchCards = (payload) => ({
  type: FETCH_CARDS,
  payload,
});

export const typeSetLoading = ({
  type: 'SET_LOADING',
});

export const fetchCards = () => async (dispatch) => {
  dispatch(typeSetLoading);
  await apiCards
    .apiFetchCards()
    .then((res) => {
      dispatch(typeSetLoading);
      dispatch(typeFetchCards(res.data));
    });
};
