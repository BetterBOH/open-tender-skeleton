import React from 'react';
import { Text, Button, Icon } from 'components';

const QuantitySpinner = React.memo(props => {
  const { quantity } = props;

  return (
    <div className="QuantitySpinner inline-flex justify-center items-center bg-color-gray-light py_5">
      <Button className="QuantitySpinner__icon" alt="decrement">
        <Icon className="flex" icon="Minus" fill="gray" />
      </Button>
      <span className="QuantitySpinner__count text-center bg-color-gray-dark radius-lg mx_5">
        <Text size="extrasmall" className="text-semibold color-white">
          {quantity}
        </Text>
      </span>
      <Button className="QuantitySpinner__icon" alt="increment">
        <Icon className="flex" icon="Plus" fill="gray" />
      </Button>
    </div>
  );
});

export default QuantitySpinner;
