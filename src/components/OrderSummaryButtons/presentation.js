import React from 'react';
import get from 'utils/get';
import { Button, Icon, Text } from 'components';

const OrderSummaryButtons = React.memo(
  ({
    orderIsPending,
    handleGoBack,
    handleAttemptReorder,
    localesContext,
    brandContext
  }) => {
    const { Language } = localesContext;
    return (
      <div className="OrderSummaryButtons flex">
        <Button
          variant="icon-circle-primary"
          className="bg-color-gray-dark hover-bg-color-black"
          onClick={handleGoBack}
        >
          <Icon icon="Back" fill={get(brandContext, 'colors.white')} />
        </Button>
        {!orderIsPending && (
          <Button
            variant="primary"
            onClick={f => f}
            className="bg-color-white hover-bg-color-gray-lighter flex flex-1 justify-center items-center ml1 px1 py_5"
          >
            <div className="LocationCard__order-button-icon mr_5">
              <Icon icon="Bubbles" />
            </div>
            <Text
              size="extra-small"
              className="text-extra-bold uppercase letter-spacing-md"
            >
              {Language.t('orderSummary.feedback')}
            </Text>
          </Button>
        )}
        {!orderIsPending && (
          <Button
            variant="primary"
            onClick={handleAttemptReorder}
            className="bg-color-gray-dark hover-bg-color-black flex flex-1 justify-center items-center ml1 px1 py_5"
          >
            <div className="LocationCard__order-button-icon mr_5">
              <Icon icon="Repeat" fill={get(brandContext, 'colors.white')} />
            </div>
            <Text
              size="extra-small"
              className="text-extra-bold color-white uppercase letter-spacing-md"
            >
              {Language.t('orderSummary.reorder')}
            </Text>
          </Button>
        )}
      </div>
    );
  }
);

export default OrderSummaryButtons;
