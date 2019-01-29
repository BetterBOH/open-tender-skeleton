import { FULFILLED, IDLE, PENDING, REJECTED } from 'constants/Status';
import { FETCH_ALL_LOCATIONS } from 'state/actions/applicationActions';

const initialState = [];

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case `${FETCH_ALL_LOCATIONS}_${FULFILLED}`:
      console.log('SUCC', action);
      return action.payload;
    case `${FETCH_ALL_LOCATIONS}_${REJECTED}`:
      console.log('ERR', action);
      return state;

    default:
      return state;
  }
};
