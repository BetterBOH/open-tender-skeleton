import {
  SET_SIDE_CURTAIN,
  RESET_SIDE_CURTAIN
} from 'state/actions/ui/sideCurtainActions';

const initialState = {
  sideCurtainIsActive: false,
  variant: '',
  data: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SIDE_CURTAIN:
      return {
        ...state,
        sideCurtainIsActive: true,
        variant: payload.variant,
        data: payload.data
      };
    case RESET_SIDE_CURTAIN:
      return { ...initialState };
    default:
      return state;
  }
};
