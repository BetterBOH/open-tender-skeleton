import React, { Fragment } from 'react';
import { Text, DetailsCard } from 'components';

const CheckoutDetails = React.memo(
  ({ formattedCheckoutDetails, localesContext }) => {
    return (
      <Fragment>
        <div className="mb1">
          <Text size="cta" className="bold">
            {localesContext.Language.t('checkout.details')}
          </Text>
        </div>
        <DetailsCard details={formattedCheckoutDetails} />
      </Fragment>
    );
  }
);

export default CheckoutDetails;
