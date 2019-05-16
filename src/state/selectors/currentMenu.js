import { createSelector } from 'reselect';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.session.order.orderData.location_id'),
  state => get(state, 'openTender.session.order.orderData.service_type'),
  state => get(state, 'openTender.session.menus'),
  (locationId, serviceType, menus) => {
    if (!menus || !Object.keys(menus).length) return null;

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
