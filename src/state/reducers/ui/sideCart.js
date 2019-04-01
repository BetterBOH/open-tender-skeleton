import {
  SET_SIDE_CART,
  RESET_SIDE_CART
} from 'state/actions/ui/sideCartActions';

const initialState = {
  sideCartIsActive: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SIDE_CART:
      return {
        ...state,
        sideCartIsActive: true
      };
    case RESET_SIDE_CART:
      return { ...initialState };
    default:
      return state;
  }
};
