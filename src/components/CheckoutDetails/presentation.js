import React, { Fragment } from 'react';
import {
  Card,
  Text,
  DetailItemRowWithDropdown,
  PaymentMethods,
  DetailItemRowWithChildren,
  AddPromoCode
} from 'components';

const CheckoutDetails = React.memo(props => {
  const {
    localesContext,
    locationName,
    serviceType,
    requestedAt,
    phoneNumber,
    activePaymentMethod,
    promoCode,
    handleSetPromoCode,
    promoCodeStatus
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
        >
          <PaymentMethods className="CheckoutDetails__payment-dropdown none lg:block" />
        </DetailItemRowWithDropdown>
        <DetailItemRowWithChildren
          label={Language.t('checkout.promo')}
          icon="Gift"
          value={promoCode || Language.t('checkout.placeholders.optional')}
        >
          <AddPromoCode handleSubmit={handleSetPromoCode} />
        </DetailItemRowWithChildren>
      </Card>
    </Fragment>
  );
});

export default CheckoutDetails;
