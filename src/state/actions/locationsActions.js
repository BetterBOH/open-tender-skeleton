/**
 * TO-DO: This will change when there is a more official way of adding orderType
 * but for now we will filter the restaurants in local state to help connect
 * users with catering locations.
 */
export const SET_LOCATION_TYPE = 'SET_LOCATION_TYPE';
export const setLocationType = orderType => ({
  type: SET_LOCATION_TYPE,
  payload: orderType
});
