import React from 'react';
import { Text, Button, Icon } from 'components';
import get from 'utils/get';

const QuantitySpinner = React.memo(props => {
  const {
    quantity,
    max,
    handleDecrement,
    handleIncrement,
    isDisabled,
    brandContext
  } = props;
  const hasQuantity = quantity && quantity > 0;

  if (isDisabled) {
    return (
      <div className="QuantitySpinner inline-flex justify-center items-center py_5">
        <span className="QuantitySpinner__count flex justify-center items-center bg-color-gray-dark radius-lg mx_5">
          <Text size="extrasmall" className="text-semibold color-white">
            {quantity}
          </Text>
        </span>
      </div>
    );
  }

  return hasQuantity ? (
    <div className="QuantitySpinner inline-flex justify-center items-center bg-color-gray-light py_5">
      <Button
        className="QuantitySpinner__icon"
        alt="decrement"
        onClick={handleDecrement}
      >
        <Icon
          className="flex"
          icon="Minus"
          fill={get(brandContext, 'colors.gray')}
        />
      </Button>
      <span className="QuantitySpinner__count flex justify-center items-center bg-color-gray-dark radius-lg mx_5">
        <Text size="extrasmall" className="text-semibold color-white">
          {quantity}
        </Text>
      </span>
      <Button
        className="QuantitySpinner__icon"
        alt="increment"
        onClick={handleIncrement}
        isDisabled={quantity === max}
      >
        <Icon
          className="flex"
          icon="Plus"
          fill={get(brandContext, 'colors.gray')}
        />
      </Button>
    </div>
  ) : (
    <div className="QuantitySpinner inline-flex justify-center items-center py_5">
      <Button alt="increment" onClick={handleIncrement}>
        <Icon
          className="flex"
          icon="PlusCircle"
          fill={get(brandContext, 'colors.gray')}
        />
      </Button>
    </div>
  );
});

export default QuantitySpinner;
