import React, { Fragment } from 'react';
import get from 'utils/get';
import { Card, Text, Icon } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const AccountDetails = React.memo(props => {
  const { customer, addresses, payments, Language } = props;
  const accountDetailsRow = (label, icon, value) => (
    <div className="AccountDetails__row flex justify-between items-center py1 pl1 pr_5">
      <Text
        size="extrasmall"
        className="text-bold color-gray letter-spacing-md uppercase"
      >
        {label}
      </Text>
      <div className="flex bg-color-gray-light radius-sm p_5">
        <div className="AccountDetails__icon mr_5">
          <Icon icon={icon} fill={gray} />
        </div>
        <Text size="extrasmall" className="color-gray-dark">
          {value}
        </Text>
        <div className="AccountDetails__icon mr_5">
          <Icon icon={'Dropdown'} fill={gray} />
        </div>
      </div>
    </div>
  );

  const fullName = `${get(customer, 'first_name', '')} ${get(
    customer,
    'last_name',
    ''
  )}`;
  const email = get(customer, 'email');
  const defaultAddress = addresses.find(address => address.is_default);
  const defaultPayment = payments.find(payment => payment.is_default);
  const numberOfAddresses = addresses.length;
  const numberOfPaymentOptions = payments.length;
  const addressText = get(defaultAddress, 'street_address', 'Add Your Address');
  const paymentText = defaultPayment
    ? `${defaultPayment.card_type} Ending In ****${defaultPayment.last4}`
    : 'Add Your Credit Card';

  return (
    <Fragment>
      <div className="mb1 ml1">
        <Text size="cta" className="bold">
          {Language.t('account.details')}
        </Text>
      </div>
      <div className="mb1 ml1">
        <Text size="cta">{Language.t('account.instructions')}</Text>
      </div>
      <Card className="AccountDetails px1_5 py_5">
        {!!fullName
          ? accountDetailsRow(Language.t('account.name'), 'User', fullName)
          : null}
        {!!email
          ? accountDetailsRow(Language.t('account.email'), 'At', email)
          : null}
        {accountDetailsRow(
          Language.t('account.password'),
          'Lock',
          '**********'
        )}
        {!!addresses
          ? accountDetailsRow(
              `${Language.t('account.delivery')} (${numberOfAddresses})`,
              'Map',
              `${addressText}`
            )
          : null}
        {!!payments
          ? accountDetailsRow(
              `${Language.t('account.payment')} (${numberOfPaymentOptions})`,
              'CreditCard',
              `${paymentText}`
            )
          : null}
      </Card>
    </Fragment>
  );
});

export default AccountDetails;
