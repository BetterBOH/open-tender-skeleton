import { createSelector } from 'reselect';
import { currentLocation, SystemTimezoneMap } from 'brandibble-redux';
import get from 'utils/get';

export default createSelector(
  state => currentLocation(state.openTender),
  currentLocation => {
    if (!currentLocation) return null;
    return SystemTimezoneMap[get(currentLocation, 'timezone')];
  }
);
