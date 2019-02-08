import { FULFILLED, REJECTED } from 'constants/Status';
import { FORWARD_GEOCODE } from 'state/actions/geocoderActions';

const initialState = {
  selected: null,
  results: {}
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

    default:
      return state;
  }
};
