import { matchPath } from 'react-router-dom';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

/* eslint-disable require-yield */
export const onAddLineItem = function*(action) {
  const { payload } = action;
  const lineItem = get(payload, 'lineItem');
  const lineItemIsConfigurable = !!get(lineItem, 'operationMaps.length');
  const history = get(getConfig(ConfigKeys.STATE), 'history');
  const customizeRoute = get(getConfig(ConfigKeys.ROUTES), 'menus');
  const basename = get(customizeRoute, 'basename');
  const match = matchPath(window.location.pathname, {
    path: customizeRoute.path,
    exact: customizeRoute.exact
  });
  const locationMatch = get(match, 'params.locationId');

  if (lineItemIsConfigurable && locationMatch) {
    return history.push(`${basename}/${locationMatch}/${lineItem.uuid}`);
  }
};
