import { put } from 'redux-saga/effects';
import { history } from 'state/store';
import get from 'utils/get';

export const ON_ADD_LINE_ITEM = 'ON_ADD_LINE_ITEM';
export const onAddLineItem = function*(action) {
  yield put({ type: ON_ADD_LINE_ITEM });

  const { payload, meta } = action;
  const lineItem = get(payload, 'value.lineItem');
  const lineItemIsConfigurable = get(lineItem, 'operationMaps.length');
  const customizeLineItemRoute = get(meta, 'customizeLineItemRoute');

  /**
   * TO-DO: This uses the default history, and not the actual history that
   * the StoreContext.Provider is actively supplying to components.
   *
   * Because of this, we'll most likely have to create an Observer that will
   * listen to status instead. This way would allow the Observer to use
   * withStore to access history and push a state to it using the route map
   * from withRoutes.
   *
   * Our alternative is to create a saga that mounts active Context API values
   * in Redux and use getState here to access those values. This could be part
   * of App init and have a wrapping action so we can trigger an update to
   * Context in Redux should anything change (it shouldn't).
   *
   * UPDATE 3/15: Trying out using withRoutes to provide meta to a wrapping action
   */
  if (lineItemIsConfigurable && customizeLineItemRoute)
    history.push(`${customizeLineItemRoute}/${lineItem.uuid}`);
};
