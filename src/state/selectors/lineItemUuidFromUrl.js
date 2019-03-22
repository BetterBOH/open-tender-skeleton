import { createSelector } from 'reselect';
import { createMatchSelector } from 'connected-react-router';
import { getConfig } from 'lib/MutableConfig';
import ConfigKeys from 'constants/ConfigKeys';
import get from 'utils/get';

export default createSelector(
  state => state,
  state => {
    const customizeRoute = get(getConfig(ConfigKeys.ROUTES), 'menu');
    const matchSelector = createMatchSelector(customizeRoute);
    const match = matchSelector(state);

    return get(match, 'params.lineItemUuid');
  }
);
