export const SET_ORDER_TYPE = 'SET_ORDER_TYPE';
export const setOrderType = orderType => ({
  type: SET_ORDER_TYPE,
  payload: orderType
});

export const SET_SERVICE_TYPE = 'SET_SERVICE_TYPE';
export const setServiceType = serviceType => ({
  type: SET_SERVICE_TYPE,
  payload: serviceType
});

export const SET_ORDER_AND_SERVICE_TYPE = 'SET_ORDER_AND_SERVICE_TYPE';
export const setOrderAndServiceType = ({ orderType, serviceType }) => ({
  type: SET_ORDER_AND_SERVICE_TYPE,
  payload: { orderType, serviceType }
});
