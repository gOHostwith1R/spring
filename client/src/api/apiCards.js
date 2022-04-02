import api from './axiosConfig';

export const apiCards = {
  apiFetchCards: () => api.get('cards'),
};
