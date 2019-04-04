import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { brandibbleMiddleware as openTenderMiddleware } from 'brandibble-redux';
import { createBrowserHistory } from 'history';

import createSagaMiddleware from 'redux-saga';

import reducers from 'state/reducers';
import sagas from 'state/sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = [...openTenderMiddleware, sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  ...reducers
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(sagas);

export { store, history };
