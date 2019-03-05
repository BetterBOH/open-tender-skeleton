import React, { Fragment } from 'react';
import get from 'utils/get';

import { Card, Text, Icon } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const PastOrderDetails = React.memo(props => {
  const { order, localesContext } = props;
  const { Language } = localesContext;

  const pastOrderDetailsRow = (label, icon, value) => (
    <div className="PastOrderDetails__row flex justify-between items-center py1 pl1 pr_5">
      <Text
        size="extrasmall"
        className="text-bold uppercase color-gray letter-spacing-sm"
      >
        {label}
      </Text>
      <div className="flex bg-color-gray-light radius-sm p_5">
        <div className="PastOrderDetails__icon mr_5">
          <Icon icon={icon} fill={gray} />
        </div>
        <Text size="extrasmall" className="color-gray-dark">
          {value}
        </Text>
      </div>
    </div>
  );

  // TODO: Add pickup by?
  const serviceType = get(order, 'service_type_str');
  const locationName = get(order, 'location_name');
  const requestedDate = get(order, 'requested_date');
  const requestedTime = get(order, 'requested_time');
  const phoneNumber = get(order, 'phone');
  const cardType = get(order, 'credit_card.card_type');
  const last4 = get(order, 'credit_card.last4');

  return (
    <Fragment>
      <div className="mb1">
        <Text size="cta" className="bold">
          {Language.t('order.details')}
        </Text>
      </div>
      <Card className="PastOrderDetails px1_5 py_5">
        {!!serviceType
          ? pastOrderDetailsRow(Language.t('order.service'), 'Bag', serviceType)
          : null}
        {!!locationName
          ? pastOrderDetailsRow(
              Language.t('order.location'),
              'Marker',
              locationName
            )
          : null}
        {!!requestedDate || !!requestedTime
          ? pastOrderDetailsRow(
              Language.t('order.pickupTime'),
              'Clock',
              `${requestedDate} at ${requestedTime}`
            )
          : null}
        {!!phoneNumber
          ? pastOrderDetailsRow(
              Language.t('order.contact'),
              'Phone',
              phoneNumber
            )
          : null}
        {!!cardType || !!last4
          ? pastOrderDetailsRow(
              Language.t('order.payment'),
              'CreditCard',
              `${cardType} Ending In ***${last4}`
            )
          : null}
      </Card>
    </Fragment>
  );
});

export default PastOrderDetails;
