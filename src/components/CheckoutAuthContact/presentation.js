import React, { Fragment } from 'react';
import get from 'utils/get';
import getRoutes from 'utils/getRoutes';
import { Text, Button, Icon, DetailsCard } from 'components';

const CheckoutAuthContact = React.memo(
  ({ customer, handleClickCheckoutAsGuest, localesContext, brandContext }) => {
    const CheckoutAuthContactButtons = (
      <Fragment>
        <Button
          className="flex justify-start items-center pl1 py1 pr2"
          to={getRoutes().DASHBOARD}
        >
          <span className="Icon--with-bubble bg-color-gray-dark p_5 mr1">
            <Icon
              variant="small"
              icon="Write"
              fill={get(brandContext, 'colors.white')}
            />
          </span>
          <Text className="color-gray-dark bold nowrap" size="detail">
            {localesContext.Language.t('checkout.contact.editInDashboard')}
          </Text>
        </Button>
        <Button
          className="flex justify-start items-center px1 py_5"
          onClick={handleClickCheckoutAsGuest}
        >
          <span className="Icon--with-bubble bg-color-gray-dark p_5 mr1">
            <Icon
              variant="small"
              icon="UserCircle"
              fill={get(brandContext, 'colors.white')}
            />
          </span>
          <div className="flex flex-col">
            <Text className="color-gray-dark bold nowrap" size="detail">
              {localesContext.Language.t('checkout.contact.checkoutAsGuest')}
            </Text>
            <Text className="color-gray nowrap" size="detail">
              {localesContext.Language.t('checkout.contact.logout')}
            </Text>
          </div>
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
