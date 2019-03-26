import { createSelector } from 'reselect';
import { locationIdFromMenuUrl } from 'state/selectors';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.session.order.orderData.location_id'),
  state => get(state, 'openTender.data.locations.locationsById'),
  (locationId, locationsById) => get(locationsById, locationId, {})
);
