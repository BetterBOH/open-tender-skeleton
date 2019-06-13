import React from 'react';
import get from 'utils/get';
import { Button, Text, Icon } from 'components';

const Flash = React.memo(({ message, description, onClose, brandContext }) => (
  <div className="Flash col-12 transition-slide-up p1 radius-md shadow-sm mb1 flex bg-color-white">
    <div className="Flash__content flex items-center flex-wrap col-12 pr1">
      <Text size="body" className="text-semibold block col-12">
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
          <Icon
            icon="Close"
            variant="small"
            fill={get(brandContext, 'colors.black')}
          />
        </Button>
      </div>
    )}
  </div>
));

export default Flash;
