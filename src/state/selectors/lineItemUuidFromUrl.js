import { createSelector } from 'reselect';
import { matchPath } from 'react-router-dom';

import get from 'utils/get';
import getRoutes, { RouteProperties } from 'utils/getRoutes';

export default createSelector(
  state => state,
  () => {
    const locationPathname = get(window, 'location.pathname');
    const match = matchPath(locationPathname, {
      path: getRoutes().MENUS,
      exact: getRoutes(RouteProperties.EXACT).MENUS
    });

    return get(match, 'params.lineItemUuid');
  }
);
