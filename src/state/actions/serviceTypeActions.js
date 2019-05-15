import {
  setServiceType,
  setOrderAddress,
  setRequestedAt,
  Constants as BrandibbleConstants
} from 'brandibble-redux';
import get from 'utils/get';
import { fetchAndSetupMenu } from 'state/actions/menuActions';
import { resetModal } from 'state/actions/viewActions';
import { validateAndSetOrderLocationId } from 'state/actions/mapActions';
import { clearDeliveryFormAddress } from 'state/actions/deliveryActions';

const { ServiceTypes } = BrandibbleConstants;

export const CONFIRM_CHANGE_TO_DELIVERY = 'CONFIRM_CHANGE_TO_DELIVERY';

export function confirmChangeToDelivery(address, geolocation) {
  return (dispatch, getState) => {
    const {
      brandibble: {
        ref,
        session: {
          order: { ref: orderRef }
        }
      }
    } = getState();

    const payload = Promise.all([
      dispatch(setServiceType(orderRef, ServiceTypes.DELIVERY)),
      dispatch(setOrderAddress(orderRef, address))
    ]).then(() =>
      dispatch(fetchAndSetupMenu(geolocation.location_id)).then(() =>
        dispatch(
          validateAndSetOrderLocationId(
            ref,
            orderRef,
            geolocation.location_id,
            [geolocation],
            ServiceTypes.DELIVERY
          )
        ).then(response => {
          dispatch(clearDeliveryFormAddress());
          if (get(response, 'value.validateCurrentCartError')) return;
          return dispatch(resetModal());
        })
      )
    );

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
      brandibble: {
        ref,
        session: {
          order: { ref: orderRef }
        }
      }
    } = getState();

    const payload = Promise.all([
      dispatch(setRequestedAt(orderRef, 'asap')),
      dispatch(setServiceType(orderRef, ServiceTypes.PICKUP)),
      dispatch(setOrderAddress(orderRef, null))
    ]).then(() =>
      dispatch(fetchAndSetupMenu(geolocation.location_id)).then(() =>
        dispatch(
          validateAndSetOrderLocationId(
            ref,
            orderRef,
            geolocation.location_id,
            [geolocation],
            ServiceTypes.PICKUP
          )
        ).then(response => {
          dispatch(clearDeliveryFormAddress());
          if (get(response, 'value.validateCurrentCartError')) return;
          return dispatch(resetModal());
        })
      )
    );

    return dispatch({
      type: CONFIRM_CHANGE_TO_PICKUP,
      payload
    });
  };
}
