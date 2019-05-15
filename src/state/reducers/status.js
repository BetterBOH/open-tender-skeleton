import { FULFILLED, IDLE, PENDING, REJECTED } from 'constants/Status';
import { INITIALIZE_APPLICATION } from 'state/actions/applicationActions';
import { SET_ORDER_AND_SERVICE_TYPE } from 'state/actions/orderActions';
import { FETCH_CURRENT_POSITION } from 'state/actions/geocoderActions';
import { SET_DELIVERY_FORM_ADDRESS } from 'state/actions/deliveryActions';

const initialState = {
  initializeApplication: IDLE,
  setOrderAndServiceType: IDLE,
  validateUserEmail: IDLE,
  fetchCurrentPosition: IDLE,
  setDeliveryFormAddress: IDLE
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    /* Initialize Application */
    case `${INITIALIZE_APPLICATION}_${PENDING}`:
      return { ...state, initializeApplication: PENDING };
    case `${INITIALIZE_APPLICATION}_${FULFILLED}`:
      return { ...state, initializeApplication: FULFILLED };
    case `${INITIALIZE_APPLICATION}_${REJECTED}`:
      return { ...state, initializeApplication: REJECTED };

    /* Welcome Flow */
    case `${SET_ORDER_AND_SERVICE_TYPE}_${PENDING}`:
      return { ...state, setOrderAndServiceType: PENDING };
    case `${SET_ORDER_AND_SERVICE_TYPE}_${FULFILLED}`:
      return { ...state, setOrderAndServiceType: FULFILLED };
    case `${SET_ORDER_AND_SERVICE_TYPE}_${REJECTED}`:
      return { ...state, setOrderAndServiceType: REJECTED };

    /* Fetch Current Position */
    case `${FETCH_CURRENT_POSITION}_${PENDING}`:
      return { ...state, fetchCurrentPosition: PENDING };
    case `${FETCH_CURRENT_POSITION}_${FULFILLED}`:
      return { ...state, fetchCurrentPosition: FULFILLED };
    case `${FETCH_CURRENT_POSITION}_${REJECTED}`:
      return { ...state, fetchCurrentPosition: REJECTED };

    /* Set Delivery Form Address */
    case `${SET_DELIVERY_FORM_ADDRESS}_${PENDING}`:
      return { ...state, setDeliveryFormAddress: PENDING };
    case `${SET_DELIVERY_FORM_ADDRESS}_${FULFILLED}`:
      return { ...state, setDeliveryFormAddress: FULFILLED };
    case `${SET_DELIVERY_FORM_ADDRESS}_${REJECTED}`:
      return { ...state, setDeliveryFormAddress: REJECTED };

    default:
      return state;
  }
};
