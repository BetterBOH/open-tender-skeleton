import React from 'react';

import { Button, Icon, Text } from 'components';

const OrderSummaryButtons = React.memo(props => {
  return (
    <div className="CheckoutButtons flex">
      <Button
        variant="icon-circle-primary"
        className={`bg-color-gray-dark`}
        onClick={f => f}
      >
        <Icon fill="white" icon="Back" />
      </Button>
      <Button
        variant="primary"
        onClick={f => f}
        className="bg-color-white flex flex-1 justify-center items-center px1 py_5"
      >
        <div className="LocationCard__order-button-icon mr_5">
          <Icon icon="Bubbles" />
        </div>
        <Text
          size="extrasmall"
          className="text-extrabold uppercase letter-spacing-md"
        >
          Feedback
        </Text>
      </Button>
      <Button
        variant="primary"
        onClick={f => f}
        className="bg-color-black flex flex-1 justify-center items-center px1 py_5"
      >
        <div className="LocationCard__order-button-icon mr_5">
          <Icon fill="white" icon="Repeat" />
        </div>
        <Text
          size="extrasmall"
          className="text-extrabold color-white uppercase letter-spacing-md"
        >
          Reorder
        </Text>
      </Button>
    </div>
  );
});

export default OrderSummaryButtons;
