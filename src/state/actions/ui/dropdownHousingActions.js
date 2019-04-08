export const SET_DROPDOWN_HOUSING = 'SET_DROPDOWN_HOUSING';
export const RESET_DROPDOWN_HOUSING = 'RESET_DROPDOWN_HOUSING';

export const setDropdownHousing = (variant = '', data = {}) => ({
  type: SET_DROPDOWN_HOUSING,
  payload: {
    variant,
    data
  }
});

export const resetDropdownHousing = () => ({
  type: RESET_DROPDOWN_HOUSING
});
