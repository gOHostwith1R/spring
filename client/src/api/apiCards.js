import axios from 'axios';

export const apiCards = {
  apiFetchCards: () => axios.get('http://localhost:5000/api/cards'),
};
