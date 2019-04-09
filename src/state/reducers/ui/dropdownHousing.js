import {
  CREATE_DROPDOWN_HOUSING,
  CLOSE_DROPDOWN_HOUSING
} from 'state/actions/ui/dropdownHousingActions';

const initialState = {
  dropdownMenus: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_DROPDOWN_HOUSING:
      return {
        ...state,
        dropdownMenus: [...state.dropdownMenus, payload]
      };
    case CLOSE_DROPDOWN_HOUSING:
      return {
        ...state,
        dropdownMenus: state.dropdownMenus.filter(
          dropdownMenu => dropdownMenu.uuid !== payload
        )
      };
    default:
      return state;
  }
};
