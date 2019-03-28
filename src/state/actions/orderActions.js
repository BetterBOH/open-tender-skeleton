import { setServiceType, removeLineItem } from 'brandibble-redux';
import { setLocationType } from 'state/actions/locationsActions';
import get from 'utils/get';

export const SET_ORDER_AND_SERVICE_TYPE = 'SET_ORDER_AND_SERVICE_TYPE';
export const setOrderAndServiceType = (
  orderRef,
  orderType,
  serviceType
) => dispatch =>
  dispatch({
    type: SET_ORDER_AND_SERVICE_TYPE,
    payload: Promise.all([
      dispatch(setServiceType(orderRef, serviceType)),
      dispatch(setLocationType(orderType))
    ])
  });

export const REMOVE_INVALID_LINE_ITEMS = 'REMOVE_INVALID_LINE_ITEMS';
export const removeInvalidLineItems = () => (dispatch, getState) => {
  const state = getState();
  const orderRef = get(state, 'openTender.session.order.ref');
  const lineItemsData = get(
    state,
    'openTender.session.order.lineItemsData',
    []
  );

  if (!lineItemsData.length) {
    return Promise.resolve();
  }

  const lineItemsToRemove = lineItemsData.reduce(
    (itemsToRemove, currentItem) => {
      if (!get(currentItem, 'isValid')) {
        itemsToRemove.push(dispatch(removeLineItem(orderRef, currentItem)));
      }
      return itemsToRemove;
    },
    []
  );

  if (!lineItemsToRemove.length) {
    Promise.resolve();
  }

  return Promise.all(lineItemsToRemove);
};
