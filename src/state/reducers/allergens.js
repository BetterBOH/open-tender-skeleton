import {
  HYDRATE_ALLERGENS_FROM_LOCAL_STORAGE,
  ADD_ALLERGENS_TO_LOCAL_STORAGE,
  REMOVE_ALLERGENS_FROM_LOCAL_STORAGE
} from 'state/actions/locationsActions';

const initialState = {
  allergens: []
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case HYDRATE_ALLERGENS_FROM_LOCAL_STORAGE:
    case ADD_ALLERGENS_TO_LOCAL_STORAGE:
    case REMOVE_ALLERGENS_FROM_LOCAL_STORAGE:
      return {
        ...state,
        allergens: action.payload
      };

    default:
      return state;
  }
};
