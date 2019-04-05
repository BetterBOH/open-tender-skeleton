import { createSelector } from 'reselect';
import { matchPath } from 'react-router-dom';
import { getConfig } from 'lib/MutableConfig';
import ConfigKeys from 'constants/ConfigKeys';
import get from 'utils/get';

export default createSelector(
  state => state,
  state => {
    const customizeRoute = get(getConfig(ConfigKeys.ROUTES), 'menus');
    const locationPathname = get(window, 'location.pathname');
    const match = matchPath(window.location.pathname, {
      path: customizeRoute.path,
      exact: customizeRoute.exact
    });

    return get(match, 'params.lineItemUuid');
  }
);
