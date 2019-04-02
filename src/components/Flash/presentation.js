import React from 'react';
import cx from 'classnames';
import { Button, Text, Icon } from 'components';

const Flash = React.memo(({ variant, message, description, onClose }) => {
  const classes = cx(
    'Flash p1 radius-md shadow-sm mb1 flex',
    `Flash--${variant}`
  );

  return (
    <div className={classes}>
      <div className="Flash__content flex items-center flex-wrap col-12 pr1">
        <Text size="body" className="text-bold block col-12">
          {message}
        </Text>
        {description && (
          <Text size="description" className="block col-12 mt_5">
            {description}
          </Text>
        )}
      </div>
      {onClose && (
        <div className="Flash__close">
          <Button onClick={onClose}>
            <Icon icon="Close" fill={'#333'} />
          </Button>
        </div>
      )}
    </div>
  );
});

export default Flash;
