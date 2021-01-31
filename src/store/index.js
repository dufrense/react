import reducer from './reducer';
import { createStore } from 'redux';
import * as constants from './constants';

const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export { store, constants };