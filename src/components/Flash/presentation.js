import React from 'react';
import cx from 'classnames';

const Flash = React.memo(
  ({ variant, message, description, onClose, className }) => {
    const classes = cx(
      'Flash p1 radius-sm shadow-sm',
      `Flash--${variant}`,
      className
    );

    return (
      <div className={classes}>
        <div className="Flash__content pr1">
          <Text size="detail">{message}</Text>
          <Text size="detail">{description}</Text>
        </div>
        {onClose && (
          <div className="Flash__close">
            <Button onClick={onClose}>
              <Icon icon="Close" />
            </Button>
          </div>
        )}
      </div>
    );
  }
);

export default Flash;
