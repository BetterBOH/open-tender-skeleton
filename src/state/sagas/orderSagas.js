import { matchPath } from 'react-router-dom';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';
import getRoutes, { RouteProperties } from 'utils/getRoutes';

/* eslint-disable require-yield */
export const onAddLineItem = function*(action) {
  const { payload } = action;
  const lineItem = get(payload, 'lineItem');
  const lineItemIsConfigurable = !!get(lineItem, 'operationMaps.length');
  const history = get(getConfig(ConfigKeys.STATE), 'history');

  const basename = getRoutes(RouteProperties.BASENAME).MENUS;
  const match = matchPath(window.location.pathname, {
    path: getRoutes().MENUS,
    exact: getRoutes(RouteProperties.EXACT).MENUS
  });
  const locationMatch = get(match, 'params.locationId');

  if (lineItemIsConfigurable && locationMatch) {
    return history.push(`${basename}/${locationMatch}/${lineItem.uuid}`);
  }
};
