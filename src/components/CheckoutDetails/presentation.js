import React, { Fragment } from 'react';

import { Card, Text, DetailItemRowWithDropdown } from 'components';
import DropdownIds from 'constants/DropdownIds';

const CheckoutDetails = React.memo(props => {
  const {
    localesContext,
    locationName,
    serviceType,
    requestedAt,
    phoneNumber,
    activePaymentMethod,
    promoCode,
    actions
  } = props;
  const { Language } = localesContext;

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
          label={Language.t('checkout.serviceType')}
          icon="Bag"
          value={serviceType}
        />
        <DetailItemRowWithDropdown
          label={Language.t('checkout.pickupTime')}
          icon="Clock"
          value={requestedAt}
        />
        <DetailItemRowWithDropdown
          label={Language.t('checkout.contact')}
          icon="Phone"
          value={
            phoneNumber || Language.t('checkout.placeholders.addPhoneNumber')
          }
        />
        <DetailItemRowWithDropdown
          label={Language.t('checkout.payment')}
          icon="CreditCard"
          value={
            activePaymentMethod ||
            Language.t('checkout.placeholders.addPayment')
          }
          dropdownId={DropdownIds.PAYMENT_DROPDOWN}
          onClick={() => actions.createDropdown(DropdownIds.PAYMENT_DROPDOWN)}
        />
        <DetailItemRowWithDropdown
          label={Language.t('checkout.promo')}
          icon="Gift"
          value={promoCode || Language.t('checkout.placeholders.optional')}
        />
      </Card>
    </Fragment>
  );
});

export default CheckoutDetails;
