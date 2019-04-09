export const CREATE_DROPDOWN = 'CREATE_DROPDOWN';
export const createDropdown = id => ({
  type: CREATE_DROPDOWN,
  payload: id
});

export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';
export const closeDropdown = id => ({
  type: CLOSE_DROPDOWN,
  payload: id
});
