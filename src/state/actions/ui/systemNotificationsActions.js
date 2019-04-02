import uuid from 'uuid';

export const CREATE_SYSTEM_NOTIFICATION = 'CREATE_SYSTEM_NOTIFICATION';
export const createSystemNotification = notification => ({
  type: CREATE_SYSTEM_NOTIFICATION,
  payload: {
    message: notification.message,
    description: notification.description,
    variant: notification.variant,
    uuid: uuid()
  }
});

export const CLOSE_SYSTEM_NOTIFICATION = 'CLOSE_SYSTEM_NOTIFICATION';
export const closeSystemNotification = uuidToClose => ({
  type: CLOSE_SYSTEM_NOTIFICATION,
  payload: uuidToClose
});
