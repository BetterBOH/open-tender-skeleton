import { select } from 'redux-saga/effects';
import { matchPath } from 'react-router-dom';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

export const onAddLineItem = function*(action) {
  const { payload } = action;

  const lineItem = get(payload, 'lineItem');
  const lineItemIsConfigurable = !!get(lineItem, 'operationMaps.length');

  const history = get(getConfig(ConfigKeys.STATE), 'history');

  const state = yield select(state => state);
  const customizeRoute = get(getConfig(ConfigKeys.ROUTES), 'menus');
  const basename = get(customizeRoute, 'basename');

  const locationPathname = get(window, 'location.pathname');
  const match = matchPath(window.location.pathname, {
    path: customizeRoute.path,
    exact: customizeRoute.exact
  });
  const locationMatch = get(match, 'params.locationId');

  if (lineItemIsConfigurable && locationMatch) {
    return history.push(`${basename}/${locationMatch}/${lineItem.uuid}`);
  }
};
