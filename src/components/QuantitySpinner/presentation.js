import React from 'react';
import { Text, Button, Icon } from 'components';

const QuantitySpinner = React.memo(props => {
  const { quantity, handleDecrement, handleIncrement } = props;
  const hasQuantity = quantity && quantity > 0;

  return hasQuantity ? (
    <div className="QuantitySpinner inline-flex justify-center items-center bg-color-gray-light py_5">
      <Button
        className="QuantitySpinner__icon"
        alt="decrement"
        onClick={handleDecrement}
      >
        <Icon className="flex" icon="Minus" fill="gray" />
      </Button>
      <span className="QuantitySpinner__count text-center bg-color-gray-dark radius-lg mx_5">
        <Text size="extrasmall" className="text-semibold color-white">
          {quantity}
        </Text>
      </span>
      <Button
        className="QuantitySpinner__icon"
        alt="increment"
        onClick={handleIncrement}
      >
        <Icon className="flex" icon="Plus" fill="gray" />
      </Button>
    </div>
  ) : (
    <div className="QuantitySpinner inline-flex justify-center items-center py_5">
      <Button alt="increment" onClick={handleIncrement}>
        <Icon className="flex" icon="PlusCircle" fill="gray" />
      </Button>
    </div>
  );
});

export default QuantitySpinner;