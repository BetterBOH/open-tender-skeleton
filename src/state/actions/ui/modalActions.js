export const SET_MODAL = 'SET_MODAL';
export const setModal = (variant = '', data = {}) => ({
  type: SET_MODAL,
  payload: {
    variant,
    data
  }
});

export const RESET_MODAL = 'RESET_MODAL';
export const resetModal = () => ({
  type: RESET_MODAL
});
