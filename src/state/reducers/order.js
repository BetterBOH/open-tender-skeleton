import {
  SET_ORDER_TYPE,
  SET_SERVICE_TYPE,
  SET_ORDER_AND_SERVICE_TYPE
} from 'state/actions/orderActions';

const initialState = {
  orderType: null,
  serviceType: null
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SET_ORDER_TYPE:
      return { ...state, orderType: action.payload };
    case SET_SERVICE_TYPE:
      return { ...state, serviceType: action.payload };
    case SET_ORDER_AND_SERVICE_TYPE:
      const { serviceType, orderType } = action.payload;
      return { ...state, serviceType, orderType };

    default:
      return state;
  }
};
