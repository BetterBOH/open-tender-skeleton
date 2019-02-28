import { createSelector } from 'reselect';
import { locationIdFromMenuUrl } from 'state/selectors';
import get from 'utils/get';

export default createSelector(
  state => locationIdFromMenuUrl(state),
  state => get(state, 'openTender.data.locations.locationsById'),
  (locationId, locationsById) => get(locationsById, locationId, {})
);
