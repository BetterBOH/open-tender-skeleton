import { FULFILLED } from 'constants/Status';
import { VALIDATE_USER_EMAIL } from 'state/actions/authActions';

const initialState = {
  attemptedCustomerEmail: null
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case `${VALIDATE_USER_EMAIL}_${FULFILLED}`:
      return {
        ...state,
        attemptedCustomerEmail: action.payload
      };

    default:
      return state;
  }
};
