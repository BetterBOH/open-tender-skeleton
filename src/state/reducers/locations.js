import { SET_LOCATION_TYPE } from 'state/actions/locationsActions';

const initialState = {
  locationType: null
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_LOCATION_TYPE:
      return {
        ...state,
        locationType: action.payload
      };

    default:
      return state;
  }
};
