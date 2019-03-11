import React, { Fragment } from 'react';
import get from 'utils/get';

import { Card, Text, DetailItemRowWithDropdown } from 'components';

const CheckoutDetails = React.memo(props => {
  const { checkoutDetails, localesContext } = props;
  const { Language } = localesContext;

  const locationName = get(checkoutDetails, 'locationName', '');

  const requestedDate = get(checkoutDetails, 'requestedDate', '');
  const requestedTime = get(checkoutDetails, 'requestedTime', '');
  const requestedDateAndTime =
    !!requestedDate && !!requestedTime
      ? `${requestedDate} at ${requestedTime}`
      : '';

  const pickupBy = get(checkoutDetails, 'pickupBy', '');

  const phoneNumber = get(checkoutDetails, 'phone', '');

  const cardType = get(checkoutDetails, 'defaultPayment.card_type', '');
  const last4 = get(checkoutDetails, 'defaultPayment.last4', '');
  const defaultPayment =
    !!cardType && !!last4
      ? `${cardType} ${Language.t('checkout.ccEndingIn')}${last4}`
      : '';

  return (
    <Fragment>
      <div className="mb1">
        <Text size="cta" className="bold">
          {Language.t('checkout.details')}
        </Text>
      </div>
      <Card className="CheckoutDetails px1_5 py_5">
        <DetailItemRowWithDropdown
          label={Language.t('checkout.location')}
          icon="Marker"
          value={locationName}
        />
        <DetailItemRowWithDropdown
          label={Language.t('checkout.pickupTime')}
          icon="Clock"
          value={requestedDateAndTime}
        />
        <DetailItemRowWithDropdown
          label={Language.t('checkout.pickupBy')}
          icon="User"
          value={pickupBy}
        />
        <DetailItemRowWithDropdown
          label={Language.t('checkout.contact')}
          icon="Phone"
          value={phoneNumber}
        />
        <DetailItemRowWithDropdown
          label={Language.t('checkout.payment')}
          icon="CreditCard"
          value={defaultPayment}
        />
      </Card>
    </Fragment>
  );
});

export default CheckoutDetails;
