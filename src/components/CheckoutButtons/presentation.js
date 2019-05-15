import React from 'react';
import { Status } from 'brandibble-redux';
import get from 'utils/get';
import { Button, Icon, Text } from 'components';

const CheckoutButtons = React.memo(
  ({
    handleBackToMenu,
    handleSubmitOrder,
    canSubmitOrder,
    submitOrderStatus,
    localesContext,
    brandContext
  }) => {
    const { Language } = localesContext;
    const formIsPending = submitOrderStatus === Status.PENDING;

    return (
      <div className="CheckoutButtons flex">
        <Button
          variant="icon-circle-primary"
          className="bg-color-gray-light"
          onClick={handleBackToMenu}
        >
          <Icon icon="Back" fill={get(brandContext, 'colors.white')} />
        </Button>
        <Button
          className="flex-1 ml1"
          variant="primary"
          onClick={handleSubmitOrder}
          isDisabled={!canSubmitOrder || formIsPending}
          enabledClassName="bg-color-gray-dark color-white"
          disabledClassName="disabled bg-color-gray-light color-gray"
        >
          <Text size="cta-small">
            {formIsPending
              ? Language.t('checkout.submittingOrder')
              : Language.t('checkout.submitOrder')}
          </Text>
        </Button>
      </div>
    );
  }
);

export default CheckoutButtons;
