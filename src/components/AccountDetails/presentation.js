import React from 'react';
import get from 'utils/get';
import { Card, Text, Icon, AccountDetailsItem } from 'components';
import { withBrand } from 'config';

const AccountDetails = React.memo(props => {
  const { accountDetails, localesContext } = props;
  const { Language } = localesContext;

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
  const numberOfAddresses = `${Language.t('account.delivery')} (${get(
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
        <AccountDetailsItem
          label={Language.t('account.name')}
          icon={'User'}
          value={get(accountDetails, 'fullName', '')}
        />
        <AccountDetailsItem
          label={Language.t('account.email')}
          icon={'At'}
          value={get(accountDetails, 'email', '')}
        />
        <AccountDetailsItem
          label={Language.t('account.password')}
          icon={'Lock'}
          value={'**********'}
        />
        <AccountDetailsItem
          label={numberOfAddresses}
          icon={'Map'}
          value={`${addressText}`}
        />
        <AccountDetailsItem
          label={numberOfPayments}
          icon={'CreditCard'}
          value={`${paymentText}`}
        />
      </Card>
    </div>
  );
});

export default AccountDetails;
