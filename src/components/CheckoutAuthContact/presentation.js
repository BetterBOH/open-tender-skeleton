import React from 'react';
import get from 'utils/get';
import {
  Text,
  Icon,
  Button,
  DetailsCard,
  EditUserAttributeLinks
} from 'components';

const CheckoutAuthContact = React.memo(
  ({
    customer,
    unauthenticateUser,
    openTenderRef,
    handleClickUserAttribute,
    localesContext,
    brandContext
  }) => {
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
        <div className="flex justify-between mb1">
          <Text size="cta" className="bold">
            {localesContext.Language.t('checkout.contact.title')}
          </Text>
          <Button
            variant="secondary"
            onClick={() => unauthenticateUser(openTenderRef)}
            className="bg-color-gray-dark flex items-center px1 py_5 justify-center"
          >
            <Icon
              variant="small"
              className="mr_5"
              icon="UserCircle"
              fill={get(brandContext, 'colors.white')}
            />

            <Text
              size="extrasmall"
              className="text-extrabold color-white uppercase letter-spacing-md"
            >
              {localesContext.Language.t('checkout.contact.logout')}
            </Text>
          </Button>
        </div>
        <DetailsCard details={authenticatedUserContactDetails} />
      </div>
    );
  }
);

export default CheckoutAuthContact;
