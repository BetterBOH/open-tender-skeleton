import {
  DELIVERY_ADDRESS_IS_NOT_SPECIFIC_ENOUGH,
  SET_DELIVERY_FORM_ADDRESS,
  CLEAR_DELIVERY_FORM_ADDRESS,
  SET_DELIVERY_FORM_ADDRESS_UNIT
} from 'state/actions/deliveryActions';

const initialState = {
  modifiedAddress: {},
  deliveryAddressIsNotSpecificEnough: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELIVERY_ADDRESS_IS_NOT_SPECIFIC_ENOUGH:
      return { ...state, deliveryAddressIsNotSpecificEnough: true };
    case SET_DELIVERY_FORM_ADDRESS:
      return {
        modifiedAddress: action.payload,
        deliveryAddressIsNotSpecificEnough: false
      };
    case SET_DELIVERY_FORM_ADDRESS_UNIT:
      return {
        modifiedAddress: {
          ...state.modifiedAddress,
          unit: action.payload
        },
        deliveryAddressIsNotSpecificEnough: false
      };
    case CLEAR_DELIVERY_FORM_ADDRESS:
      return { ...initialState };
    default:
      return state;
  }
};
