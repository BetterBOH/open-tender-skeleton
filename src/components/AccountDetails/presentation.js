import React, { Fragment } from 'react';
import get from 'utils/get';
import { Card, Text, Icon } from 'components';
import { withBrand } from 'config';

const AccountDetails = React.memo(props => {
  const { accountDetails, Language } = props;
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

  return (
    <div className="AccountDetails">
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
          {!!get(accountDetails, 'fullName')
            ? accountDetailsRow(
                Language.t('account.name'),
                'User',
                get(accountDetails, 'fullName')
              )
            : null}
          {!!get(accountDetails, 'email')
            ? accountDetailsRow(
                Language.t('account.email'),
                'At',
                get(accountDetails, 'email')
              )
            : null}
          {accountDetailsRow(
            Language.t('account.password'),
            'Lock',
            '**********'
          )}
          {accountDetailsRow(
            `${Language.t('account.delivery')} (${get(
              accountDetails,
              'addresses.length',
              0
            )})`,
            'Map',
            `${addressText}`
          )}
          {accountDetailsRow(
            `${Language.t('account.payment')} (${get(
              accountDetails,
              'payments.length',
              0
            )})`,
            'CreditCard',
            `${paymentText}`
          )}
        </Card>
      </Fragment>
    </div>
  );
});

export default AccountDetails;
