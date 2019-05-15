import {
  SET_DELIVERY_FORM_ADDRESS,
  CLEAR_DELIVERY_FORM_ADDRESS,
  SET_DELIVERY_FORM_ADDRESS_UNIT
} from 'state/actions/deliveryActions';

const initialState = {
  modifiedAddress: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DELIVERY_FORM_ADDRESS:
      return { ...state, modifiedAddress: action.payload };
    case SET_DELIVERY_FORM_ADDRESS_UNIT:
      return {
        ...state,
        modifiedAddress: {
          ...state.modifiedAddress,
          unit: action.payload
        }
      };
    case CLEAR_DELIVERY_FORM_ADDRESS:
      return { ...state, modifiedAddress: initialState.modifiedAddress };

    default:
      return state;
  }
};
