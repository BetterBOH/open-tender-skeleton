import React from 'react';
import cx from 'classnames';

import { Button, Icon, Text } from 'components';

const CheckoutButtons = React.memo(
  ({ localesContext, handleGoToMenu, handleSubmit, canSubmitOrder }) => {
    const { Language } = localesContext;

    return (
      <div className="CheckoutButtons flex">
        <Button
          variant="icon-circle-primary"
          className={`bg-color-gray-dark`}
          onClick={handleGoToMenu}
        >
          <Icon fill="white" icon="Back" />
        </Button>
        <Button
          className={`flex-1 ml1 bg-color-black color-white shadow-md`}
          variant="primary"
          onClick={handleSubmit}
          isDisabled={!canSubmitOrder}
          disabledClassName="disabled bg-color-gray-light color-gray"
        >
          <Text size="cta-small">Submit Order</Text>
        </Button>
      </div>
    );
  }
);

export default CheckoutButtons;
