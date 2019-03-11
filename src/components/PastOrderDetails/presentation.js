import React, { Fragment } from 'react';
import get from 'utils/get';

import { Card, Text, DetailItemRow } from 'components';

const PastOrderDetails = React.memo(props => {
  const { order, localesContext } = props;
  const { Language } = localesContext;

  const serviceType = get(order, 'service_type_str', '');

  const locationName = get(order, 'location_name', '');

  const requestedDate = get(order, 'requested_date', '');
  const requestedTime = get(order, 'requested_time', '');
  const requestedDateAndTime =
    !!requestedDate && !!requestedTime
      ? `${requestedDate} at ${requestedTime}`
      : '';

  const phoneNumber = get(order, 'phone', '');

  const cardType = get(order, 'credit_card.card_type', '');
  const last4 = get(order, 'credit_card.last4', '');
  const cardUsed =
    !!cardType && !!last4
      ? `${cardType} ${Language.t('order.ccEndingIn')}${last4}`
      : '';

  return (
    <Fragment>
      <div className="mb1">
        <Text size="cta" className="bold">
          {Language.t('order.details')}
        </Text>
      </div>
      <Card className="PastOrderDetails px1_5 py_5">
        <DetailItemRow
          label={Language.t('order.service')}
          icon="Bag"
          value={serviceType}
        />
        <DetailItemRow
          label={Language.t('order.location')}
          icon="Marker"
          value={locationName}
        />
        <DetailItemRow
          label={Language.t('order.pickupTime')}
          icon="Clock"
          value={requestedDateAndTime}
        />
        <DetailItemRow
          label={Language.t('order.pickupBy')}
          icon="User"
          value="Hugh"
        />
        <DetailItemRow
          label={Language.t('order.contact')}
          icon="Phone"
          value={phoneNumber}
        />
        <DetailItemRow
          label={Language.t('order.payment')}
          icon="CreditCard"
          value={cardUsed}
        />
      </Card>
    </Fragment>
  );
});

export default PastOrderDetails;
