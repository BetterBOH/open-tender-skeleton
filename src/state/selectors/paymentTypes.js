import { createSelector } from 'reselect';
import { currentLocation } from 'brandibble-redux';

import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.session.order.orderData.service_type', {}),
  state => currentLocation(get(state, 'openTender')),
  (serviceType, location) => {
    return get(location, `payment_types[${serviceType}]`, []);
  }
);
