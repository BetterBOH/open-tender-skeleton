import { FULFILLED, REJECTED } from 'constants/Status';
import {
  FETCH_ALL_LOCATIONS,
  SET_LOCATION_TYPE
} from 'state/actions/locationsActions';

const initialState = {
  locations: [],
  locationType: null
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case `${FETCH_ALL_LOCATIONS}_${FULFILLED}`:
      console.log(action.payload);
      return {
        ...state,
        locations: action.payload
      };
    case `${FETCH_ALL_LOCATIONS}_${REJECTED}`:
      return state;

    case SET_LOCATION_TYPE:
      return {
        ...state,
        locationType: action.payload
      };

    default:
      return state;
  }
};
