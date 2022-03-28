import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mockCards, mockIncorrectCards } from '../../mock/mockCards';
import { apiCards } from './apiCards';
import { authLogin } from '../redux/actions';

jest.mock('axios');
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

const mockServiceCreator = (body, succeeds = true) => () => new Promise((resolve, reject) => {
  setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
});

describe('Test Login', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });
  it('should success login', async () => {
    store
      .dispatch(authLogin(
        { username: 'admin ', password: '1234' },
        mockServiceCreator({ username: 'admin', password: '1234' }),
      ))
      .then(() => expect(store.getActions()).toContainEqual({ type: 'LOGIN' }));
  });
  it('should unsuccessful login', async () => {
    store
      .dispatch(authLogin(
        { },
        mockServiceCreator({ }, false),
      ))
      .then(() => expect(store.getActions()).toContainEqual({ type: 'SET_ERROR' }));
  });
});
