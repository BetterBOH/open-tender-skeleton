import {
  SET_DROPDOWN_HOUSING,
  RESET_DROPDOWN_HOUSING
} from 'state/actions/ui/dropdownHousingActions';

const initialState = {
  dropdownHousingIsActive: false,
  variant: '',
  data: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DROPDOWN_HOUSING:
      return {
        ...state,
        dropdownHousingIsActive: true,
        variant: payload.variant,
        data: payload.data
      };
    case RESET_DROPDOWN_HOUSING:
      return { ...initialState };
    default:
      return state;
  }
};
