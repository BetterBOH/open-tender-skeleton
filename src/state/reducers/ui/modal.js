import { SET_MODAL, RESET_MODAL } from 'state/actions/ui/modalActions';

const initialState = {
  modalIsActive: false,
  modalIsFrozen: false,
  variant: '',
  data: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case SET_MODAL:
      return {
        ...state,
        modalIsActive: true,
        modalIsFrozen: payload.freezeModal,
        variant: payload.variant,
        data: payload.data
      };
    case RESET_MODAL:
      return { ...initialState };
    default:
      return state;
  }
};
