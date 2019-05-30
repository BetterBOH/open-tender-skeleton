import React from 'react';
import get from 'utils/get';
import { Text, DetailsCard, EditUserAttributeLinks } from 'components';

const CheckoutAuthContact = React.memo(
  ({ customer, handleClickUserAttribute, localesContext }) => {
    const authenticatedUserContactDetails = [
      {
        label: localesContext.Language.t('checkout.contact.fullName'),
        icon: 'User',
        value: `${get(customer, 'attributes.first_name')} ${get(
          customer,
          'attributes.last_name'
        )}`,
        children: <EditUserAttributeLinks />,
        renderChildrenInDropdown: true,
        onClick: handleClickUserAttribute
      },
      {
        label: localesContext.Language.t('checkout.contact.email'),
        icon: 'At',
        value: get(customer, 'attributes.email'),
        children: <EditUserAttributeLinks />,
        renderChildrenInDropdown: true,
        onClick: handleClickUserAttribute
      },
      {
        label: localesContext.Language.t('checkout.contact.phoneNumber'),
        icon: 'Phone',
        value: get(customer, 'attributes.phone'),
        children: <EditUserAttributeLinks />,
        renderChildrenInDropdown: true,
        onClick: handleClickUserAttribute
      }
    ];

    return (
      <div className="CheckoutAuthContact">
        <div className="flex mb1">
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
