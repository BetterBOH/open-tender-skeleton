import { SET_CURRENT_CATEGORY } from 'state/actions/ui/menuNavigationActions';

const initialState = {
  currentCategory: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: payload.currentCategory
      };
    default:
      return state;
  }
};
