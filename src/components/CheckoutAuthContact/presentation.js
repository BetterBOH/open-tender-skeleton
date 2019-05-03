import React, { Fragment } from 'react';
import get from 'utils/get';
import getRoutes from 'utils/getRoutes';
import { Text, Button, Icon, DetailsCard } from 'components';

const CheckoutAuthContact = React.memo(
  ({ customer, handleClickCheckoutAsGuest, localesContext }) => {
    const CheckoutAuthContactButtons = (
      <Fragment>
        <Button
          className="flex justify-center items-center px1 py_5"
          to={getRoutes().DASHBOARD}
        >
          <span className="mr1">
            <Icon variant="small" icon="Write" />
          </span>
          <Text className="color-gray-dark bold nowrap" size="description">
            Edit in Dashboard
          </Text>
        </Button>
        <Button
          className="flex justify-center items-center px1 py_5"
          onClick={handleClickCheckoutAsGuest}
        >
          <span className="mr1">
            <Icon variant="small" icon="UserCircle" />
          </span>
          <Text className="color-gray-dark bold nowrap" size="description">
            Checkout as a Guest
          </Text>
        </Button>
      </Fragment>
    );

    const authenticatedUserContactDetails = [
      {
        label: localesContext.Language.t('checkout.contact.fullName'),
        icon: 'User',
        value: `${get(customer, 'attributes.first_name')} ${get(
          customer,
          'attributes.last_name'
        )}`,
        children: CheckoutAuthContactButtons,
        renderChildrenInDropdown: true
      },
      {
        label: localesContext.Language.t('checkout.contact.email'),
        icon: 'At',
        value: get(customer, 'attributes.email'),
        children: CheckoutAuthContactButtons,
        renderChildrenInDropdown: true
      },
      {
        label: localesContext.Language.t('checkout.contact.phoneNumber'),
        icon: 'Phone',
        value: get(customer, 'attributes.phone'),
        children: CheckoutAuthContactButtons,
        renderChildrenInDropdown: true
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
