import {
  setServiceType,
  setOrderAddress,
  resetTip,
  Constants
} from 'brandibble-redux';

const { PICKUP, DELIVERY } = Constants.ServiceTypes;

export const CONFIRM_CHANGE_TO_DELIVERY = 'CONFIRM_CHANGE_TO_DELIVERY';

export const confirmChangeToDelivery = (orderRef, address) => {
  return dispatch => {
    return dispatch({
      type: CONFIRM_CHANGE_TO_DELIVERY,
      payload: Promise.all([
        dispatch(setServiceType(orderRef, DELIVERY)),
        dispatch(setOrderAddress(orderRef, address))
      ])
    });
  };
};

export const CONFIRM_CHANGE_TO_PICKUP = 'CONFIRM_CHANGE_TO_PICKUP';

export const confirmChangeToPickup = orderRef => {
  return dispatch => {
    return dispatch({
      type: CONFIRM_CHANGE_TO_PICKUP,
      payload: Promise.all([
        dispatch(setServiceType(orderRef, PICKUP)),
        dispatch(setOrderAddress(orderRef, null)),
        dispatch(resetTip(orderRef))
      ])
    });
  };
};
