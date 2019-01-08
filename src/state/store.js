import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import { routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducers from 'state/reducers';

const middleware = [thunk, promiseMiddleware()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer
});

export const history = createHistory();
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
