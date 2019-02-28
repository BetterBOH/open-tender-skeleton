import React from 'react';
import get from 'utils/get';
import { Card, Text, Icon } from 'components';
import { withBrand } from 'config';

const AccountDetailsRow = React.memo(props => {
  const { label, icon, value } = props;
  return (
    <div className="AccountDetails__row flex justify-between items-center py1 pl1 pr_5">
      <Text
        size="extrasmall"
        className="text-bold color-gray letter-spacing-md uppercase"
      >
        {label}
      </Text>
      <div className="flex bg-color-gray-light radius-sm p_5">
        <div className="AccountDetails__icon mr_5">
          <Icon icon={icon} fill="gray" />
        </div>
        <Text size="extrasmall" className="color-gray-dark">
          {value}
        </Text>
        <div className="AccountDetails__icon mr_5">
          <Icon icon={'Dropdown'} fill="gray" />
        </div>
      </div>
    </div>
  );
});

const AccountDetails = React.memo(props => {
  const { accountDetails, Language } = props;

  const addressText = get(accountDetails, 'defaultAddress.street_address')
    ? get(accountDetails, 'defaultAddress.street_address')
    : Language.t('account.addAddress');
  const paymentText =
    get(accountDetails, 'defaultPayment.card_type') &&
    get(accountDetails, 'defaultPayment.last4')
      ? `${get(accountDetails, 'defaultPayment.card_type')} ${Language.t(
          'account.ccEndingIn'
        )}${get(accountDetails, 'defaultPayment.last4')}`
      : Language.t('account.addCreditCard');
  const numberofAddresses = `${Language.t('account.delivery')} (${get(
    accountDetails,
    'addresses.length',
    0
  )})`;
  const numberOfPayments = `${Language.t('account.payment')} (${get(
    accountDetails,
    'payments.length',
    0
  )})`;
  return (
    <div className="AccountDetails">
      <div className="mb1 ml1">
        <Text size="cta" className="bold">
          {Language.t('account.details')}
        </Text>
      </div>
      <div className="mb1 ml1">
        <Text size="cta">{Language.t('account.instructions')}</Text>
      </div>
      <Card className="AccountDetails px1_5 py_5">
        <AccountDetailsRow
          label={Language.t('account.name')}
          icon={'User'}
          value={get(accountDetails, 'fullName', '')}
        />
        <AccountDetailsRow
          label={Language.t('account.email')}
          icon={'At'}
          value={get(accountDetails, 'email', '')}
        />
        <AccountDetailsRow
          label={Language.t('account.password')}
          icon={'Lock'}
          value={'**********'}
        />
        <AccountDetailsRow
          label={numberofAddresses}
          icon={'Map'}
          value={`${addressText}`}
        />
        <AccountDetailsRow
          label={numberOfPayments}
          icon={'CreditCard'}
          value={`${paymentText}`}
        />
      </Card>
    </div>
  );
});

export default AccountDetails;
