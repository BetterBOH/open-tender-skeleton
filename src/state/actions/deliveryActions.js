export const SET_DELIVERY_FORM_ADDRESS = 'SET_DELIVERY_FORM_ADDRESS';
export const SET_DELIVERY_FORM_ADDRESS_UNIT = 'SET_DELIVERY_FORM_ADDRESS_UNIT';
export const CLEAR_DELIVERY_FORM_ADDRESS = 'CLEAR_DELIVERY_FORM_ADDRESS';

export const setDeliveryFormAddress = address => dispatch =>
  dispatch({
    type: SET_DELIVERY_FORM_ADDRESS,
    payload: address
  });

export const setDeliveryFormAddressUnit = unit => dispatch =>
  dispatch({
    type: SET_DELIVERY_FORM_ADDRESS_UNIT,
    payload: unit
  });

export const clearDeliveryFormAddress = () => dispatch =>
  dispatch({
    type: CLEAR_DELIVERY_FORM_ADDRESS
  });
