import { createSelector } from 'reselect';
import { locationIdFromMenuUrl } from 'state/selectors';
import get from 'utils/get';

export default createSelector(
  state => locationIdFromMenuUrl(state),
  state => get(state, 'openTender.session.order.orderData.service_type'),
  state => get(state, 'openTender.session.menus'),
  (locationId, serviceType, menus) => {
    if (!menus) return null;

    const currentMenuKey = Object.keys(menus)
      .reverse()
      .find(menu => {
        const [currentLocationId, currentServiceType] = menu.split('_');

        return (
          parseInt(currentLocationId) === locationId &&
          currentServiceType === serviceType
        );
      });

    return menus[currentMenuKey];
  }
);
