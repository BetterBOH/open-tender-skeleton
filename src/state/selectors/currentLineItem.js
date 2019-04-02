import { createSelector } from 'reselect';
import { lineItemUuidFromUrl, currentMenu } from 'state/selectors';

import get from 'utils/get';

export default createSelector(
  state => lineItemUuidFromUrl(state),
  state => get(state, 'openTender.session.order.lineItemsData'),
  (uuid, lineItems) => lineItems.find(lineItem => lineItem.uuid === uuid)
);
