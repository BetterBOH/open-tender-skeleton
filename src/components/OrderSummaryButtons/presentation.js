import React from 'react';

import { Button, Icon, Text } from 'components';

const OrderSummaryButtons = React.memo(({ localesContext, orderIsPending }) => {
  const { Language } = localesContext;
  return (
    <div className="CheckoutButtons flex">
      <Button
        variant="icon-circle-primary"
        className="bg-color-gray-dark"
        onClick={f => f}
      >
        <Icon fill="white" icon="Back" />
      </Button>
      {!orderIsPending && (
        <Button
          variant="primary"
          onClick={f => f}
          className="bg-color-white flex flex-1 justify-center items-center ml1 px1 py_5"
        >
          <div className="LocationCard__order-button-icon mr_5">
            <Icon icon="Bubbles" />
          </div>
          <Text
            size="extrasmall"
            className="text-extrabold uppercase letter-spacing-md"
          >
            {Language.t('orderSummary.feedback')}
          </Text>
        </Button>
      )}
      {!orderIsPending && (
        <Button
          variant="primary"
          onClick={f => f}
          className="bg-color-black flex flex-1 justify-center items-center ml1 px1 py_5"
        >
          <div className="LocationCard__order-button-icon mr_5">
            <Icon fill="white" icon="Repeat" />
          </div>
          <Text
            size="extrasmall"
            className="text-extrabold color-white uppercase letter-spacing-md"
          >
            {Language.t('orderSummary.reorder')}
          </Text>
        </Button>
      )}
    </div>
  );
});

export default OrderSummaryButtons;
