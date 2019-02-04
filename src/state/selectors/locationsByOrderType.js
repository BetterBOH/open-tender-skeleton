import { createSelector } from 'reselect';
import { locationsAsArray } from 'state/selectors';
import { Constants } from 'brandibble-redux';
import get from 'utils/get';

export default createSelector(
  state => locationsAsArray(state),
  locations => {
    /**
     * For the sake of testing, we are currently sorting by order type
     * by whether or not "catering" is present in the `name` attribute
     *
     * TO-DO: Rewrite this when `order_type` becomes an available attribute
     * on the location payload
     */
    return locations.reduce(
      (locationsByType, location) => {
        get(location, 'name', '')
          .toLowerCase()
          .includes(Constants.OrderTypes.CATERING)
          ? locationsByType[Constants.OrderTypes.CATERING].push(location)
          : locationsByType[Constants.OrderTypes.ONLINE_ORDERING].push(
              location
            );

        return locationsByType;
      },
      {
        [Constants.OrderTypes.CATERING]: [],
        [Constants.OrderTypes.ONLINE_ORDERING]: []
      }
    );
  }
);
