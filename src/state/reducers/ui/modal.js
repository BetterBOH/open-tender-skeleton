import { SET_MODAL, RESET_MODAL } from 'state/actions/ui/modalActions';

const initialState = {
  modalIsActive: false,
  variant: '',
  data: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MODAL:
      return {
        ...state,
        modalIsActive: true,
        variant: payload.variant,
        data: payload.data
      };
    case RESET_MODAL:
      return { ...initialState };
    default:
      return state;
  }
};