import {
  CREATE_DROPDOWN,
  CLOSE_DROPDOWN
} from 'state/actions/ui/dropdownActions';

const initialState = {
  dropdowns: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_DROPDOWN:
      return {
        ...state,
        dropdowns: [...state.dropdowns, payload]
      };
    case CLOSE_DROPDOWN:
      return {
        ...state,
        dropdowns: state.dropdowns.filter(dropdown => dropdown !== payload)
      };
    default:
      return state;
  }
};
