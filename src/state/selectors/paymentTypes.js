import { createSelector } from 'reselect';
import { locationsCollection, currentLocation } from 'brandibble-redux';

import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.session.order.orderData.service_type', {}),
  state => currentLocation(get(state, 'openTender')),
  (serviceType, location) => {
    console.log('serviceType', serviceType);
    console.log('location', location);
    return get(location, `payment_types[${serviceType}]`, []);
  }
);
