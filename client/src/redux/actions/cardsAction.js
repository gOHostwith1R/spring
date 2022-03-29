import { apiCards } from '../../api/apiCards';

const FETCH_CARDS = 'FETCH_CARDS';
const SET_LOADING = 'SET_LOADING';

const typeFetchCards = (payload) => ({
  type: FETCH_CARDS,
  payload,
});

export const typeSetLoading = ({
  type: SET_LOADING,
});

export const fetchCards = () => async (dispatch) => {
  dispatch(typeSetLoading);
  await apiCards
    .apiFetchCards()
    .then((res) => dispatch(typeFetchCards(res.data)))
    .then(() => dispatch(typeSetLoading));
};
