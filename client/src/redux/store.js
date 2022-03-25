import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cardsReducer, loginReducer } from './reducers';

const rootReducer = combineReducers({
  login: loginReducer,
  cards: cardsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
