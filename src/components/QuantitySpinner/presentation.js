import React from 'react';
import { Text } from 'components';

const QuantitySpinner = React.memo(props => {
  const { quantity } = props;

  return (
    <div>
      <Text
        size="extrasmall"
        className="text-semibold color-white bg-color-gray-dark radius-lg p_5"
      >
        {quantity}
      </Text>
    </div>
  );
});

export default QuantitySpinner;
