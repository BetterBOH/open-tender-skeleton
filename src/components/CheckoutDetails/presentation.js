import React, { Fragment } from 'react';
import get from 'utils/get';
import { Text, DetailsCard, PaymentMethods, AddPromoCode } from 'components';

const CheckoutDetails = React.memo(
  ({
    location,
    order,
    customer,
    payments,
    handleSetPromoCode,
    guestCreditCard,
    localesContext
  }) => {
    const activeCreditCardId = get(order, 'credit_card.customer_card_id');
    const activePaymentMethod = get(
      payments,
      `paymentsById[${activeCreditCardId}]`
    );
    const activePaymentMethodText = activePaymentMethod
      ? `${activePaymentMethod.card_type} x${activePaymentMethod.last4}`
      : null;

    const activeGuestPaymentMethodText = get(guestCreditCard, 'cc_number')
      ? `x${get(guestCreditCard, 'cc_number', '').substr(-4)}`
      : null;

    const formattedCheckoutDetails = [
      {
        label: localesContext.Language.t('checkout.location'),
        icon: 'Marker',
        value: get(location, 'name', '')
      },
      {
        label: localesContext.Language.t('checkout.serviceType'),
        icon: 'Bag',
        value: get(order, 'service_type', '')
      },
      {
        label: localesContext.Language.t('checkout.pickupTime'),
        icon: 'Clock',
        value: get(order, 'requested_at', '')
      },
      {
        label: localesContext.Language.t('checkout.phoneNumber'),
        icon: 'Phone',
        value: get(
          customer,
          'phone_number',
          localesContext.Language.t('checkout.placeholders.addPhoneNumber')
        )
      },
      {
        label: localesContext.Language.t('checkout.payment'),
        icon: 'CreditCard',
        value:
          activePaymentMethodText ||
          activeGuestPaymentMethodText ||
          localesContext.Language.t('checkout.placeholders.addPayment'),
        children: (
          <PaymentMethods className="CheckoutDetails__payment-dropdown none lg:block" />
        ),
        renderChildrenInDropdown: true
      },
      {
        label: localesContext.Language.t('checkout.promo'),
        icon: 'Gift',
        value:
          get(order, 'promo_code') ||
          localesContext.Language.t('checkout.placeholders.optional'),
        children: <AddPromoCode handleSubmit={handleSetPromoCode} />
      }
    ];

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
