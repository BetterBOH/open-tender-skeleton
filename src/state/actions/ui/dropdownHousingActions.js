import uuid from 'uuid';

export const CREATE_DROPDOWN_HOUSING = 'CREATE_DROPDOWN_HOUSING';
export const createDropdownHousing = children => ({
  type: CREATE_DROPDOWN_HOUSING,
  payload: {
    children,
    uuid: uuid()
  }
});

export const CLOSE_DROPDOWN_HOUSING = 'CLOSE_DROPDOWN_HOUSING';
export const closeDropdownHousing = uuidToClose => ({
  type: CLOSE_DROPDOWN_HOUSING,
  payload: uuidToClose
});
