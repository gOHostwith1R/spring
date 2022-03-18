import { createStore } from 'redux';
import { loginReducer } from './reducers';

export const store = createStore(loginReducer);
