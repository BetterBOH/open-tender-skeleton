import { SET_DRAWER, RESET_DRAWER } from 'state/actions/ui/drawerActions';

const initialState = {
  drawerIsActive: false,
  variant: '',
  data: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DRAWER:
      return {
        ...state,
        drawerIsActive: true,
        variant: payload.variant,
        data: payload.data
      };
    case RESET_DRAWER:
      return { ...initialState };
    default:
      return state;
  }
};
