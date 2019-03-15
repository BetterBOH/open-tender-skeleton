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
export const addItem = (
  openTenderRef,
  item,
  customizeLineItemRoute = null
) => dispatch =>
  dispatch({
    type: ADD_ITEM,
    meta: {
      customizeLineItemRoute
    },
    payload: dispatch(addLineItem(openTenderRef, item))
  });
