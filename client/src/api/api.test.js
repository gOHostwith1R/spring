import axios from 'axios';
import { mockCards, mockIncorrectCards } from '../../mock/mockCards';
import { apiCards } from './apiCards';

jest.mock('axios');

describe('Fetch cards', () => {
  let response;
  beforeEach(() => {
    response = mockCards;
  });
  test('Fetch correct cards', async () => {
    axios.get.mockReturnValue(response);
    const cardsData = await apiCards.apiFetchCards();
    expect(axios.get).toBeCalledTimes(1);
    expect(cardsData).toEqual(mockCards);
  });
  test('Fetch incorrect cards', async () => {
    axios.get.mockReturnValue(response);
    const cardsData = await apiCards.apiFetchCards();
    expect(axios.get).toBeCalledTimes(1);
    expect(cardsData).not.toEqual(mockIncorrectCards);
  });
});
