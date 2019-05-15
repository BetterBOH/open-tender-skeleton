import { SET_MODAL, RESET_MODAL } from 'state/actions/ui/modalActions';
import get from 'utils/get';

const initialState = {
  modalIsActive: false,
  modalIsFrozen: false,
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
        modalIsFrozen: get(payload, 'data.freezeModal', false),
        variant: payload.variant,
        data: payload.data
      };
    case RESET_MODAL:
      return { ...initialState };
    default:
      return state;
  }
};
