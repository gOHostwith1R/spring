import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cardsReducer, authReducer } from './reducers';

const rootReducer = combineReducers({
  login: authReducer,
  cards: cardsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
