import { FULFILLED, REJECTED } from 'constants/Status';
import { FETCH_ALL_LOCATIONS } from 'state/actions/locationsActions';

const initialState = [];

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case `${FETCH_ALL_LOCATIONS}_${FULFILLED}`:
      return action.payload;
    case `${FETCH_ALL_LOCATIONS}_${REJECTED}`:
      return state;

    default:
      return state;
  }
};
