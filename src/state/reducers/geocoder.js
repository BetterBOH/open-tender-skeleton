import { FULFILLED, REJECTED } from 'constants/Status';
import {
  FORWARD_GEOCODE,
  SELECT_GEOCODER_FEATURE,
  CLEAR_SELECTED_GEOCODER_FEATURE,
  FETCH_CURRENT_POSITION,
  CLEAR_USER_COORDINATES
} from 'state/actions/geocoderActions';

const initialState = {
  selected: null,
  results: {},
  userCoordinates: null
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case `${FORWARD_GEOCODE}_${FULFILLED}`:
      return {
        ...state,
        results: action.payload
      };
    case `${FORWARD_GEOCODE}_${REJECTED}`:
      return state;

    case `${SELECT_GEOCODER_FEATURE}_${FULFILLED}`: {
      const coordinates = {
        latitude: action.payload.center[1],
        longitude: action.payload.center[0]
      };

      return {
        ...state,
        selected: action.payload,
        userCoordinates: coordinates
      };
    }
    case `${SELECT_GEOCODER_FEATURE}_${REJECTED}`:
      return state;

    case CLEAR_SELECTED_GEOCODER_FEATURE:
      return {
        ...state,
        selected: initialState.selected
      };

    case `${FETCH_CURRENT_POSITION}_${FULFILLED}`: {
      const coordinates = {
        latitude: action.payload.coords.latitude,
        longitude: action.payload.coords.longitude
      };

      return {
        ...state,
        userCoordinates: coordinates
      };
    }

    case CLEAR_USER_COORDINATES: {
      const { userCoordinates } = initialState;

      return {
        ...state,
        userCoordinates
      };
    }
    default:
      return state;
  }
};
