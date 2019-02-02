import { createSelector } from 'reselect';
import { locationsByOrderType } from 'state/selectors';
import { Constants } from 'brandibble-redux';
import get from 'utils/get';

export default createSelector(
  state => locationsByOrderType(state)[Constants.OrderTypes.ONLINE_ORDERING],
  onlineOrderingLocations =>
    onlineOrderingLocations.some(
      location => get(location, 'hours_delivery', []).length
    )
);
