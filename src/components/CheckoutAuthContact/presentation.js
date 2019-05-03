import React from 'react';
import get from 'utils/get';
import getRoutes from 'utils/getRoutes';
import { Text, DetailsCard, EditUserAttributeRedirect } from 'components';

const CheckoutAuthContact = React.memo(
  ({
    customer,
    handleClickCheckoutAsGuest,
    handleClickUserAttribute,
    localesContext
  }) => {
    const authenticatedUserContactDetails = [
      {
        label: localesContext.Language.t('checkout.contact.fullName'),
        icon: 'User',
        value: `${get(customer, 'attributes.first_name')} ${get(
          customer,
          'attributes.last_name'
        )}`,
        children: (
          <EditUserAttributeRedirect
            handleClickCheckoutAsGuest={handleClickCheckoutAsGuest}
          />
        ),
        renderChildrenInDropdown: true,
        onClick: handleClickUserAttribute
      },
      {
        label: localesContext.Language.t('checkout.contact.email'),
        icon: 'At',
        value: get(customer, 'attributes.email'),
        children: (
          <EditUserAttributeRedirect
            handleClickCheckoutAsGuest={handleClickCheckoutAsGuest}
          />
        ),
        renderChildrenInDropdown: true,
        onClick: handleClickUserAttribute
      },
      {
        label: localesContext.Language.t('checkout.contact.phoneNumber'),
        icon: 'Phone',
        value: get(customer, 'attributes.phone'),
        children: (
          <EditUserAttributeRedirect
            handleClickCheckoutAsGuest={handleClickCheckoutAsGuest}
          />
        ),
        renderChildrenInDropdown: true,
        onClick: handleClickUserAttribute
      }
    ];

    return (
      <div className="CheckoutAuthContact">
        <div className="mb1">
          <Text size="cta" className="bold">
            {localesContext.Language.t('checkout.contact.title')}
          </Text>
        </div>
        <DetailsCard details={authenticatedUserContactDetails} />
      </div>
    );
  }
);

export default CheckoutAuthContact;
