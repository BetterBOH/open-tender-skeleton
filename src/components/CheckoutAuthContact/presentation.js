import React, { Fragment } from 'react';
import get from 'utils/get';
import { Text, DetailsCard } from 'components';

const CheckoutAuthContact = React.memo(({ customer, localesContext }) => {
  const authenticatedUserContactDetails = [
    {
      label: localesContext.Language.t('checkout.contact.fullName'),
      icon: 'User',
      value: `${get(customer, 'attributes.first_name')} ${get(
        customer,
        'attributes.last_name'
      )}`
    },
    {
      label: localesContext.Language.t('checkout.contact.email'),
      icon: 'At',
      value: get(customer, 'attributes.email')
    },
    {
      label: localesContext.Language.t('checkout.contact.phoneNumber'),
      icon: 'Phone',
      value: get(customer, 'attributes.phone')
    }
  ];

  return (
    <Fragment>
      <div className="mb1">
        <Text size="cta" className="bold">
          {localesContext.Language.t('checkout.contact.title')}
        </Text>
      </div>
      <DetailsCard details={authenticatedUserContactDetails} />
    </Fragment>
  );
});

export default CheckoutAuthContact;
