import { select } from 'redux-saga/effects';
import { createMatchSelector } from 'connected-react-router';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

export const onAddLineItem = function*(action) {
  const { payload } = action;

  const lineItem = get(payload, 'lineItem');
  const lineItemIsConfigurable = !!get(lineItem, 'operationMaps.length');

  const history = get(getConfig(ConfigKeys.STATE), 'history');

  const state = yield select(state => state);
  const customizeRoute = get(getConfig(ConfigKeys.ROUTES), 'menu');
  const basename = get(customizeRoute, 'basename');
  const matchSelector = createMatchSelector(customizeRoute);
  const locationMatch = get(matchSelector(state), 'params.locationId');

  if (lineItemIsConfigurable && locationMatch) {
    history.push(`${basename}/${locationMatch}/${lineItem.uuid}`);
  }
};
