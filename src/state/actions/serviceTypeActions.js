import {
  setServiceType,
  setOrderAddress,
  resetTip,
  Constants as BrandibbleConstants
} from 'brandibble-redux';
import get from 'utils/get';

const { ServiceTypes } = BrandibbleConstants;

export const CONFIRM_CHANGE_TO_DELIVERY = 'CONFIRM_CHANGE_TO_DELIVERY';

export function confirmChangeToDelivery(address, geolocation) {
  return (dispatch, getState) => {
    const {
      openTender: {
        ref,
        session: {
          order: { ref: orderRef }
        }
      }
    } = getState();

    const payload = Promise.all([
      dispatch(setServiceType(orderRef, ServiceTypes.DELIVERY)),
      dispatch(setOrderAddress(orderRef, address))
    ]);

    return dispatch({
      type: CONFIRM_CHANGE_TO_DELIVERY,
      payload
    });
  };
}

export const CONFIRM_CHANGE_TO_PICKUP = 'CONFIRM_CHANGE_TO_PICKUP';

export function confirmChangeToPickup(geolocation) {
  return (dispatch, getState) => {
    const {
      openTender: {
        ref,
        session: {
          order: { ref: orderRef }
        }
      }
    } = getState();

    const payload = Promise.all([
      dispatch(setServiceType(orderRef, ServiceTypes.PICKUP)),
      dispatch(setOrderAddress(orderRef, null)),
      dispatch(resetTip(orderRef))
    ]);

    return dispatch({
      type: CONFIRM_CHANGE_TO_PICKUP,
      payload
    });
  };
}
