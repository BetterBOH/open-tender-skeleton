import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { brandibbleMiddleware } from 'brandibble-redux';
import thunk from 'redux-thunk';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

import reducers from 'state/reducers';

export const history = createHistory();

const middleware = [
  ...brandibbleMiddleware,
  thunk,
  promiseMiddleware(),
  routerMiddleware(history)
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history)
});

export { middleware, brandibbleMiddleware };

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
