import React, { Fragment } from 'react';

import get from 'utils/get';
import {
  Text,
  DetailsCard,
  PaymentMethods,
  AccountDetailsEditName,
  AccountDetailsEditEmail,
  AccountDetailsEditPhone,
  AccountDetailsEditPassword
} from 'components';
import { FLAGS, isEnabled } from 'utils/featureFlags';
import { SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT } from 'constants/PaymentMethods';

const AccountDetails = React.memo(
  ({
    accountDetails,
    updateUser,
    updateUserStatus,
    openTenderRef,
    localesContext,
    handleClickEditName,
    handleClickEditEmail,
    handleClickEditPhone,
    handleClickEditPassword,
    handleClickAddPayment
  }) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      addresses,
      defaultAddress,
      payments,
      defaultPayment
    } = accountDetails;

    const fullName = `${firstName} ${lastName}`;

    const addressText = get(defaultAddress, 'street_address')
      ? defaultAddress.street_address
      : localesContext.Language.t('account.addAddress');

    const paymentText =
      get(defaultPayment, 'card_type') && get(defaultPayment, 'last4')
        ? `${defaultPayment.card_type} ${localesContext.Language.t(
            'account.ccEndingIn'
          )}${defaultPayment.last4}`
        : localesContext.Language.t('account.noDefaultPayment');

    const numberOfAddresses = `${localesContext.Language.t(
      'account.delivery'
    )} (${addresses.length})`;

    const numberOfPayments = `${localesContext.Language.t(
      'account.payment'
    )} (${payments.length})`;

    const formattedAccountDetails = [
      {
        onClick: handleClickEditName,
        label: localesContext.Language.t('account.name'),
        icon: 'User',
        value: fullName,
        children: (
          <AccountDetailsEditName
            openTenderRef={openTenderRef}
            updateUser={updateUser}
            updateUserStatus={updateUserStatus}
            customerAttributes={accountDetails}
          />
        ),
        renderChildrenInDropdown: true
      },
      {
        onClick: handleClickEditEmail,
        label: localesContext.Language.t('account.email'),
        icon: 'At',
        value: email,
        children: (
          <AccountDetailsEditEmail
            openTenderRef={openTenderRef}
            updateUser={updateUser}
            updateUserStatus={updateUserStatus}
            customerAttributes={accountDetails}
          />
        ),
        renderChildrenInDropdown: true
      },
      {
        onClick: handleClickEditPhone,
        label: localesContext.Language.t('account.phone'),
        icon: 'Phone',
        value: phone,
        children: (
          <AccountDetailsEditPhone
            openTenderRef={openTenderRef}
            updateUser={updateUser}
            updateUserStatus={updateUserStatus}
            customerAttributes={accountDetails}
          />
        ),
        renderChildrenInDropdown: true
      },
      {
        onClick: handleClickEditPassword,
        label: localesContext.Language.t('account.password'),
        icon: 'Lock',
        value: localesContext.Language.t('account.asterisks'),
        children: (
          <AccountDetailsEditPassword
            openTenderRef={openTenderRef}
            updateUser={updateUser}
            updateUserStatus={updateUserStatus}
            customerAttributes={accountDetails}
          />
        ),
        renderChildrenInDropdown: true
      },
      {
        label: numberOfAddresses,
        icon: 'Map',
        value: isEnabled(FLAGS.CUSTOMER_ADDRESS_BOOK) ? addressText : null
      },
      {
        onClick: handleClickAddPayment,
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
        renderChildrenInDropdown: true
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
