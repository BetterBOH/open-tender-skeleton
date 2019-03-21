import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

export const onAddLineItem = function*(action) {
  const { payload } = action;

  const lineItem = get(payload, 'lineItem');
  const lineItemIsConfigurable = get(lineItem, 'operationMaps.length');

  const history = get(getConfig(ConfigKeys.STATE), 'history');
  const customizeRoute = get(getConfig(ConfigKeys.ROUTES), 'customize.path');

  if (lineItemIsConfigurable && customizeRoute) {
    history.push(`${customizeRoute}/${lineItem.uuid}`);
  }
};
