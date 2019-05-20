import {
  setServiceType,
  setOrderAddress,
  resetTip,
  Constants
} from 'brandibble-redux';

const { ServiceTypes } = Constants;

export const CONFIRM_CHANGE_TO_DELIVERY = 'CONFIRM_CHANGE_TO_DELIVERY';

export const confirmChangeToDelivery = (orderRef, address) => {
  return dispatch => {
    return dispatch({
      type: CONFIRM_CHANGE_TO_DELIVERY,
      payload: Promise.all([
        dispatch(setServiceType(orderRef, ServiceTypes.DELIVERY)),
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
        dispatch(setServiceType(orderRef, ServiceTypes.PICKUP)),
        dispatch(setOrderAddress(orderRef, null)),
        dispatch(resetTip(orderRef))
      ])
    });
  };
};