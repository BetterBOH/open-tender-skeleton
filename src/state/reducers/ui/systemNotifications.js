import {
  CREATE_SYSTEM_NOTIFICATION,
  CLOSE_SYSTEM_NOTIFICATION
} from 'state/actions/ui/systemNotificationsActions';

const initialState = {
  notifications: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_SYSTEM_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, payload]
      };
    case CLOSE_SYSTEM_NOTIFICATION:
      return {
        ...state,
        notifications: notifications.filter(
          notification => notification.uuid !== payload
        )
      };
    default:
      return state;
  }
};
