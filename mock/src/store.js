import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducers from 'state/reducers';

export const history = createBrowserHistory();

const middleware = [thunk, promiseMiddleware(), routerMiddleware(history)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history)
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
