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
          className="bg-color-gray-light hover-bg-color-gray"
          onClick={handleGoBack}
        >
          <Icon icon="Back" fill={get(brandContext, 'colors.white')} />
        </Button>
        {!orderIsPending && (
          <Button
            variant="primary"
            onClick={handleAttemptReorder}
            className="bg-color-gray-dark hover-bg-color-black flex flex-1 justify-center items-center ml1 px1 py_5"
          >
            <Icon
              variant="medium"
              icon="Repeat"
              fill={get(brandContext, 'colors.white')}
            />
            <Text
              size="cta"
              className="text-bold color-white letter-spacing-xs ml1"
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
