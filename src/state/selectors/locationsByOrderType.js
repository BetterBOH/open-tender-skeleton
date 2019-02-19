import { createSelector } from 'reselect';
import { locationsAsArray } from 'state/selectors';
import { Constants } from 'brandibble-redux';
import get from 'utils/get';

export default createSelector(
  state => locationsAsArray(state),
  locations =>
    locations.reduce(
      (locationsByType, location) => {
        const orderTypes = get(location, 'service_types', []);

        if (orderTypes.includes(Constants.OrderTypes.CATERING)) {
          locationsByType[Constants.OrderTypes.CATERING].push(location);
        }

        if (orderTypes.includes(Constants.OrderTypes.ONLINE_ORDERING)) {
          locationsByType[Constants.OrderTypes.ONLINE_ORDERING].push(location);
        }

        return locationsByType;
      },
      {
        [Constants.OrderTypes.CATERING]: [],
        [Constants.OrderTypes.ONLINE_ORDERING]: []
      }
    )
);
