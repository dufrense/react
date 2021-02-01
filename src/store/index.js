import reducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as constants from './constants';
import * as actionCreators from './actionCreators';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);

export { store, constants, actionCreators };