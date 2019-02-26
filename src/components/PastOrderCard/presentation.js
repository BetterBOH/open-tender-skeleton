import React from 'react';
import get from 'utils/get';
import { DateTime } from 'luxon';
import currency from 'currency.js';

import { Card, Text, Button, Icon } from 'components';
import { defaultConfig } from 'config';

const grayDark = get(defaultConfig, "brand.colors['gray-dark']");

const PastOrderCard = React.memo(props => {
  const { order, showReorderPrice, localesContext } = props;
  const { Language } = localesContext;

  const locationName = get(order, 'location_name');

  const requestedDate = get(order, 'requested_date');
  const requestedDateAsLuxonDateTime = DateTime.fromFormat(
    requestedDate,
    'L/d/y'
  );

  // TODO: get item images using selector

  // TODO: calculate reorder price with OT menu data
  const reorderPrice = get(order, 'subtotal');

  const items = get(order, 'items');
  const MAX_ITEMS = 4;
  const itemTotal = items.length;
  const itemsRemaining = itemTotal - MAX_ITEMS;

  const itemNames = items.slice(0).reduce((prev, curr, index, arr) => {
    if (index === MAX_ITEMS) {
      arr.splice(MAX_ITEMS - 1);
      return `${prev}+ ${itemsRemaining} More...`;
    }

    return `${prev}${curr.name}, `;
  }, '');

  return (
    <Card className="PastOrderCard p1">
      <Text
        className="bold color-gray-dark uppercase letter-spacing-sm pb_25"
        size="extrasmall"
      >
        {locationName}
      </Text>
      <Text className="bold color-black pb1" size="small">
        {requestedDateAsLuxonDateTime.toFormat('LLLL d, y')}
      </Text>
      <div className="flex pb1">
        {items.slice(0, MAX_ITEMS).map(item => (
          <div
            key={item.id}
            className="PastOrderCard__image bg-color-gray-light shadow-md radius-md"
          />
        ))}
        <div className="PastOrderCard__image flex justify-center items-center bg-color-gray-light shadow-md radius-md">
          <Text className="bold color-black" size="small">
            {`+${itemsRemaining}`}
          </Text>
        </div>
      </div>
      <Text className="color-gray-dark pb1" size="detail">
        {itemNames}
      </Text>
      <div className="flex">
        <Button
          variant="secondary"
          onClick={f => f}
          className="bg-color-gray-light flex items-center px1 py_5"
        >
          {!showReorderPrice && (
            <div className="PastOrderCard__button-icon mr_5">
              <Icon fill={grayDark} icon="Repeat" />
            </div>
          )}
          <Text
            size="extrasmall"
            className="text-extrabold uppercase letter-spacing-sm color-gray-dark"
          >
            {Language.t('order.reOrder')}
            {showReorderPrice &&
              ` - ${currency(reorderPrice, {
                formatWithSymbol: true
              }).format()}`}
          </Text>
        </Button>
        <Button variant="secondary" onClick={f => f} className="p_5 ml_5">
          <Text
            size="extrasmall"
            className="text-extrabold uppercase letter-spacing-sm color-gray-dark"
          >
            {Language.t('order.details')}
          </Text>
        </Button>
      </div>
    </Card>
  );
});

export default PastOrderCard;
