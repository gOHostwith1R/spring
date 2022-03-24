import { combineReducers, createStore } from 'redux';
import { cardsReducer, loginReducer } from './reducers';

const rootReducer = combineReducers({
  login: loginReducer,
  cards: cardsReducer,
});

export const store = createStore(rootReducer);