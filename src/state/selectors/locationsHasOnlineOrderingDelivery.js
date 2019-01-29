import { createSelector } from 'reselect';
import locationsByOrderType from 'state/selectors/locationsByOrderType';
import { ONLINE_ORDERING } from 'constants/OrderTypes';
import get from 'utils/get';

export default createSelector(
  state => locationsByOrderType(state)[ONLINE_ORDERING],
  onlineOrderingLocations =>
    onlineOrderingLocations.some(
      location => get(location, 'hours_delivery', []).length
    )
);
