import { getConfig } from 'lib/MutableConfig';
import ConfigKeys from 'constants/ConfigKeys';
import get from 'utils/get';

export const RouteProperties = {
  BASENAME: 'basename',
  PATH: 'path',
  COMPONENT: 'component',
  EXACT: 'exact'
};

export const RequiredRoutes = {
  WELCOME: 'welcome',
  LOCATIONS: 'locations',
  PICKUP: 'pickup',
  DELIVERY: 'delivery',
  MENUS: 'menus',
  CHECKOUT: 'checkout',
  ORDER_SUMMARY: 'orderSummary',
  AUTH: 'auth',
  LOGIN: 'login',
  SIGNUP: 'signup',
  RESET: 'reset',
  DASHBOARD: 'dashboard'
};

export default (property = RouteProperties.PATH) => {
  const configRoutes = getConfig(ConfigKeys.ROUTES);

  return Object.entries(RequiredRoutes).reduce(
    (requiredRouteMap, requiredRoute) => {
      const [routeKey, routeSlug] = requiredRoute;

      requiredRouteMap[routeKey] = get(
        configRoutes,
        `${routeSlug}.${property}`
      );

      return requiredRouteMap;
    },
    {}
  );
};
