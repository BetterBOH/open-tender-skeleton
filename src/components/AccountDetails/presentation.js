import React, { Fragment } from 'react';
import get from 'utils/get';
import { Text, DetailsCard, PaymentMethods } from 'components';
import { PICKUP } from 'constants/OpenTender';
import { FLAGS, isEnabled } from 'utils/featureFlags';
import { SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT } from 'constants/PaymentMethods';

const AccountDetails = React.memo(
  ({
    fullName,
    email,
    addresses,
    defaultAddress,
    payments,
    defaultPayment,
    serviceType,
    handleClickAddPayment,
    localesContext
  }) => {
    const serviceTypeIsDelivery = serviceType !== PICKUP;

    const addressText = get(defaultAddress, 'street_address')
      ? defaultAddress.street_address
      : localesContext.Language.t('account.addAddress');

    const paymentText =
      get(defaultPayment, 'card_type') && get(defaultPayment, 'last4')
        ? `${defaultPayment.card_type} ${localesContext.Language.t(
            'account.ccEndingIn'
          )} ${defaultPayment.last4}`
        : localesContext.Language.t('account.noDefaultPayment');

    const numberOfAddresses = `${localesContext.Language.t(
      'account.delivery'
    )} (${addresses.length})`;

    const numberOfPayments = `${localesContext.Language.t(
      'account.payment'
    )} (${payments.length})`;

    const formattedAccountDetails = [
      {
        label: localesContext.Language.t('account.name'),
        icon: 'User',
        value: fullName
      },
      {
        label: localesContext.Language.t('account.email'),
        icon: 'At',
        value: email
      },
      {
        label: localesContext.Language.t('account.password'),
        icon: 'Lock',
        value: '*********'
      },
      {
        label: numberOfAddresses,
        icon: 'Map',
        value:
          serviceTypeIsDelivery && isEnabled(FLAGS.CUSTOMER_ADDRESS_BOOK)
            ? addressText
            : null
      },
      {
        label: numberOfPayments,
        icon: 'CreditCard',
        value: paymentText,
        children: (
          <PaymentMethods
            selectPaymentMethodVariant={
              SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT
            }
          />
        ),
        renderChildrenInDropdown: true,
        onClick: handleClickAddPayment
      }
    ];

    return (
      <Fragment>
        <div className="px1 mb_5">
          <Text size="cta" className="bold">
            {localesContext.Language.t('account.details')}
          </Text>
        </div>
        <div className="px1 mb1_5">
          <Text size="description" className="color-gray-dark">
            {localesContext.Language.t('account.instructions')}
          </Text>
        </div>
        <DetailsCard details={formattedAccountDetails} />
      </Fragment>
    );
  }
);

export default AccountDetails;
