import React from 'react';
import get from 'utils/get';

import { Card, Text, Button, Icon } from 'components';
import { defaultConfig } from 'config';

const grayDark = get(defaultConfig, "brand.colors['gray-dark']");

const PastOrderCard = React.memo(props => {
  const { order, localesContext } = props;
  const { Language } = localesContext;

  const locationName = get(order, 'location_name');
  const requestedDate = get(order, 'requested_date');
  const items = get(order, 'items');

  return (
    <Card className="PastOrderCard color-gray-dark p_5">
      <Text className="bold uppercase" size="extrasmall">
        {locationName}
      </Text>
      <Text className="bold color-black" size="small">
        {requestedDate}
      </Text>
      {items.map(item => (
        <Text size="small">{item.name}</Text>
      ))}
      <Button
        variant="secondary"
        onClick={f => f}
        className="bg-color-gray-light flex items-center px1 py_5"
      >
        <div className="PastOrderCard__button-icon mr_5">
          <Icon fill={grayDark} icon="Repeat" />
        </div>
        <Text
          size="extrasmall"
          className="text-extrabold uppercase letter-spacing-sm"
        >
          {Language.t('order.reOrder')}
        </Text>
      </Button>
      <Button variant="no-style">
        <Text
          size="extrasmall"
          className="text-extrabold uppercase letter-spacing-sm"
        >
          {Language.t('order.details')}
        </Text>
      </Button>
    </Card>
  );
});

export default PastOrderCard;
