import { FULFILLED, IDLE, PENDING, REJECTED } from 'constants/Status';
import { INITIALIZE_APPLICATION } from 'state/actions/applicationActions';

const initialState = {
  initializeApplication: IDLE
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    /* Initialize Application */
    case `${INITIALIZE_APPLICATION}_PENDING`:
      return { ...state, initializeApplication: PENDING };
    case `${INITIALIZE_APPLICATION}_FULFILLED`:
      return { ...state, initializeApplication: FULFILLED };
    case `${INITIALIZE_APPLICATION}_REJECTED`:
      return { ...state, initializeApplication: REJECTED };

    default:
      return state;
  }
};
