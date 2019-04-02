export const SET_SIDE_CURTAIN = 'SET_SIDE_CURTAIN';
export const RESET_SIDE_CURTAIN = 'RESET_SIDE_CURTAIN';

export const setSideCurtain = (variant = '', data = {}) => ({
  type: SET_SIDE_CURTAIN,
  payload: {
    variant,
    data
  }
});

export const resetSideCurtain = () => ({
  type: RESET_SIDE_CURTAIN
});
