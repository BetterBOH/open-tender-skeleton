import { select } from 'redux-saga/effects';
import { createMatchSelector } from 'connected-react-router';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

export const onAddLineItem = function*(action) {
  const { payload } = action;

  const lineItem = get(payload, 'lineItem');
  const lineItemIsConfigurable = get(lineItem, 'operationMaps.length');

  const history = get(getConfig(ConfigKeys.STATE), 'history');

  const state = yield select(state => state);
  const customizeRoute = get(getConfig(ConfigKeys.ROUTES), 'menu');
  const basename = get(customizeRoute, 'basename');

  /**
   * Connected React Router won't find matches if react-router's path is an array.
   * Might have to try a different router so see if they support this match type.
   *
   * This has to be a router because the path test won't match for menus since
   * they don't have an additional param at the end for lineItem UUID.
   *
   * Since we can simply get location ID from the Open Tender payload, we
   * wouldn't experience this problem if:
   * 1. We stored the user-friendly location slug in Redux somewhere.
   * 2. We only used the Open Tender provided int to describe location in URL
   *    and didn't require it to be user-friendly.
   *
   */
  const matchSelector = createMatchSelector({ path: customizeRoute.path[0] });
  const locationMatch = get(matchSelector(state), 'params.locationId');

  if (lineItemIsConfigurable && locationMatch) {
    history.push(`${basename}/${locationMatch}/${lineItem.uuid}`);
  }
};
