import React from 'react';
import { Flash } from 'components';

const SystemNotifications = React.memo(
  ({ notifications, closeNotification }) => {
    if (!notifications || !notifications.length) return null;

    return (
      <div className="SystemNotifications col-12 px1 fixed l0 z4 flex flex-wrap justify-end">
        {notifications.map(notification => (
          <Flash
            key={notification.uuid}
            message={notification.message}
            description={notification.description}
            onClose={() => closeNotification(notification.uuid)}
          />
        ))}
      </div>
    );
  }
);

export default SystemNotifications;
