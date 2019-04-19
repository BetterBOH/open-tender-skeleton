import React, { Fragment } from 'react';
import get from 'utils/get';
import { Text, DetailsCard } from 'components';

const PastOrderDetails = React.memo(({ order, localesContext }) => {
  const requestedDate = get(order, 'requested_date', '');
  const requestedTime = get(order, 'requested_time', '');
  const requestedDateAndTime =
    !!requestedDate && !!requestedTime
      ? `${requestedDate} at ${requestedTime}`
      : '';

  const cardType = get(order, 'credit_card.card_type', '');
  const last4 = get(order, 'credit_card.last4', '');
  const cardUsed =
    !!cardType && !!last4
      ? `${cardType} ${localesContext.Language.t('order.ccEndingIn')}${last4}`
      : '';

  const formattedPastOrderDetails = [
    {
      label: localesContext.Language.t('order.service'),
      icon: 'Bag',
      value: get(order, 'service_type_str', '')
    },
    {
      label: localesContext.Language.t('order.location'),
      icon: 'Marker',
      value: get(order, 'location_name', '')
    },
    {
      label: localesContext.Language.t('order.pickupTime'),
      icon: 'Clock',
      value: requestedDateAndTime
    },
    {
      label: localesContext.Language.t('order.contact'),
      icon: 'Phone',
      value: get(order, 'phone', '')
    },
    {
      label: localesContext.Language.t('order.payment'),
      icon: 'CreditCard',
      value: cardUsed
    }
  ];

  return (
    <Fragment>
      <div className="px1 mb_5">
        <Text size="cta" className="bold">
          {localesContext.Language.t('order.details')}
        </Text>
      </div>
      <DetailsCard details={formattedPastOrderDetails} />
    </Fragment>
  );
});

export default PastOrderDetails;
