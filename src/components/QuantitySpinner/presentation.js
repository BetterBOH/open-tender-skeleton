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
      <div className="QuantitySpinner inline-flex justify-center items-center">
        <span className="QuantitySpinner__count flex justify-center items-center bg-color-black radius-lg mx_5">
          <Text size="extrasmall" className="text-semibold color-white">
            {quantity}
          </Text>
        </span>
      </div>
    );
  }

  return hasQuantity ? (
    <div className="QuantitySpinner inline-flex justify-center items-center bg-color-gray-light">
      <Button
        className="QuantitySpinner__button"
        ariaLabel="decrement"
        onClick={handleDecrement}
      >
        <Icon
          className="flex mxauto"
          variant="xsmall"
          icon="Minus"
          fill={get(brandContext, 'colors[gray-dark]')}
        />
      </Button>
      <span className="QuantitySpinner__count flex justify-center items-center bg-color-black radius-lg">
        <Text size="extrasmall" className="text-semibold color-white">
          {quantity}
        </Text>
      </span>
      <Button
        className="QuantitySpinner__button"
        ariaLabel="increment"
        onClick={handleIncrement}
        isDisabled={quantity === max}
      >
        <Icon
          className="flex mxauto"
          variant="xsmall"
          icon="Plus"
          fill={get(brandContext, 'colors[gray-dark]')}
        />
      </Button>
    </div>
  ) : (
    <div className="QuantitySpinner inline-flex items-center justify-end py_5">
      <Button alt="increment" onClick={handleIncrement}>
        <Icon icon="PlusCircle" fill={get(brandContext, 'colors.gray')} />
      </Button>
    </div>
  );
});

export default QuantitySpinner;
