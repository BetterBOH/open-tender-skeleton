import React, { Fragment } from 'react';
import get from 'utils/get';
import { isoToDateAndTime } from 'utils/formatTime';
import {
  Text,
  DetailsCard,
  PaymentMethods,
  AddPromoCode,
  EditServiceTypeTime,
  ChangeLocationLinks
} from 'components';
import { ASAP } from 'constants/OpenTender';
import { Constants } from 'brandibble-redux';

const { PICKUP } = Constants.ServiceTypes;

const CheckoutDetails = React.memo(
  ({
    location,
    order,
    payments,
    guestCreditCard,
    handleClickAddPayment,
    handleClickEditServiceTypeTime,
    handleSetPromoCode,
    promoCodeErrors,
    handleClickChangeLocation,
    localesContext
  }) => {
    const serviceTypeValue = get(order, 'service_type', PICKUP);
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
        value:
          get(order, 'service_type') === PICKUP
            ? get(location, 'name', '')
            : null,
        children: <ChangeLocationLinks />,
        renderChildrenInDropdown: true,
        onClick: handleClickChangeLocation
      },
      {
        label: localesContext.Language.t('checkout.serviceType'),
        icon: 'Bag',
        value:
          serviceTypeValue.charAt(0).toUpperCase() + serviceTypeValue.slice(1)
      },
      {
        label: localesContext.Language.t('checkout.pickupTime'),
        icon: 'Clock',
        value:
          get(order, 'requested_at', ASAP) === ASAP
            ? 'ASAP'
            : isoToDateAndTime(order.requested_at),
        children: (
          <EditServiceTypeTime className="CheckoutDetails__location-dropdown" />
        ),
        renderChildrenInDropdown: true,
        onClick: handleClickEditServiceTypeTime
      },
      {
        label: localesContext.Language.t('checkout.payment'),
        icon: 'CreditCard',
        value:
          activePaymentMethodText ||
          activeGuestPaymentMethodText ||
          localesContext.Language.t('checkout.placeholders.addPayment'),
        children: <PaymentMethods />,
        renderChildrenInDropdown: true,
        onClick: handleClickAddPayment
      },
      {
        hasError: !!promoCodeErrors.length,
        label: localesContext.Language.t('checkout.promo'),
        icon: 'Gift',
        value:
          get(order, 'promo_code') ||
          localesContext.Language.t('checkout.placeholders.optional'),
        children: (
          <AddPromoCode
            promoCode={get(order, 'promo_code')}
            errors={promoCodeErrors}
            handleSubmit={handleSetPromoCode}
          />
        )
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
