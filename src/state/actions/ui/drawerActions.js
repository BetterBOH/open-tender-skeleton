export const SET_DRAWER = 'SET_DRAWER';
export const RESET_DRAWER = 'RESET_DRAWER';

export const setDrawer = (variant = '', data = {}) => ({
  type: SET_DRAWER,
  payload: {
    variant,
    data
  }
});

export const resetDrawer = () => ({
  type: RESET_DRAWER
});
