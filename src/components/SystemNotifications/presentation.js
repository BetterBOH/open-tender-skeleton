import React from 'react';
import { Flash } from 'components';

const SystemNotifications = React.memo(
  ({ notifications, closeNotification }) => {
    if (!notifications || !notifications.length) return null;

    return (
      <div className="SystemNotifications col-12 p1 absolute l0 z1">
        {notifications.map(notification => (
          <Flash
            key={notification.uuid}
            message={notification.message}
            description={notification.description}
            variant={notification.variant}
            onClose={() => closeNotification(notification.uuid)}
          />
        ))}
      </div>
    );
  }
);

export default SystemNotifications;
