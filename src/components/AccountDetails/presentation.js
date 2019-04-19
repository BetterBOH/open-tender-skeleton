import React, { Fragment } from 'react';
import get from 'utils/get';
import { Text, DetailsCard } from 'components';

const AccountDetails = React.memo(({ accountDetails, localesContext }) => {
  const addressText = get(accountDetails, 'defaultAddress.street_address')
    ? get(accountDetails, 'defaultAddress.street_address')
    : localesContext.Language.t('account.addAddress');

  const paymentText =
    get(accountDetails, 'defaultPayment.card_type') &&
    get(accountDetails, 'defaultPayment.last4')
      ? `${get(
          accountDetails,
          'defaultPayment.card_type'
        )} ${localesContext.Language.t('account.ccEndingIn')}${get(
          accountDetails,
          'defaultPayment.last4'
        )}`
      : localesContext.Language.t('account.noDefaultPayment');

  const numberOfAddresses = `${localesContext.Language.t(
    'account.delivery'
  )} (${get(accountDetails, 'addresses.length', 0)})`;

  const numberOfPayments = `${localesContext.Language.t(
    'account.payment'
  )} (${get(accountDetails, 'payments.length', 0)})`;

  const formattedAccountDetails = [
    {
      label: localesContext.Language.t('account.name'),
      icon: 'User',
      value: get(accountDetails, 'fullName', '')
    },
    {
      label: localesContext.Language.t('account.email'),
      icon: 'At',
      value: get(accountDetails, 'email', '')
    },
    {
      label: localesContext.Language.t('account.password'),
      icon: 'Lock',
      value: '*********'
    },
    {
      label: numberOfAddresses,
      icon: 'Map',
      value: addressText
    },
    {
      label: numberOfPayments,
      icon: 'CreditCard',
      value: paymentText
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
});

export default AccountDetails;
