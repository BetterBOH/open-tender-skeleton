import { setServiceType, addLineItem } from 'brandibble-redux';
import { setLocationType } from 'state/actions/locationsActions';
import { setModal } from 'state/actions/ui/modalActions';

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

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (openTenderRef, item) => (dispatch, getState) =>
  dispatch({
    type: ADD_ITEM,
    payload: dispatch(addLineItem(openTenderRef, item)).then(response => {
      const lineItem = get(response, 'value.lineItem');
      const lineItemHasOperationMaps = !!get(lineItem, 'operationMaps.length');
      const builderIsOpen =
        !!get(getState(), 'modal.modalIsActive') &&
        !!get(getState(), 'modal.data.lineItem');

      if (builderIsOpen || !lineItemHasOperationMaps) return null;

      // TO-DO: supply Modal variant without making Redux reference our presentation UI system
      const modalVariant = undefined;
      return dispatch(setModal(modalVariant, { lineItem }));
    })
  });
