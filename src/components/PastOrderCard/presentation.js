import React from 'react';
import get from 'utils/get';
import { DateTime } from 'luxon';
import { DATE_SHORT, DATE_FULL } from 'constants/DateTimeFormats';
import { getConfig } from 'lib/MutableConfig';
import ConfigKeys from 'constants/ConfigKeys';

import { Card, Text, Button, Icon, Image } from 'components';
import { IMAGE_PREFIX } from 'constants/Images';

const PastOrderCard = React.memo(props => {
  const { order, onClick, localesContext, brandContext } = props;
  const { Language } = localesContext;

  const locationName = get(order, 'location_name');
  const orderSummaryRoute = get(getConfig(ConfigKeys.ROUTES), 'orderSummary');
  const basename = get(orderSummaryRoute, 'basename');
  const orderDetailsPath = `${basename}/${get(order, 'orders_id')}`;

  const requestedDate = get(order, 'requested_date');
  const requestedDateAsLuxonDateTime = DateTime.fromFormat(
    requestedDate,
    DATE_SHORT
  );

  const items = get(order, 'items');

  const MAX_ITEMS = 4;
  const itemTotal = items.length;
  const itemsRemaining = itemTotal - MAX_ITEMS;

  const itemNames = items.slice(0).reduce((prev, curr, index, arr) => {
    if (index === MAX_ITEMS) {
      arr.splice(MAX_ITEMS);
      return `${prev}+ ${itemsRemaining} More...`;
    }

    if (index === itemTotal - 1 && itemTotal <= MAX_ITEMS) {
      return `${prev}${curr.name}`;
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
        {requestedDateAsLuxonDateTime.toFormat(DATE_FULL)}
      </Text>
      <div className="flex pb1">
        {items.slice(0, MAX_ITEMS).map(item => (
          <div
            key={item.id}
            className="PastOrderCard__image-container flex justify-center items-center shadow-sm radius-md overflow-hidden bg-color-gray-lighter"
          >
            <Image
              className="PastOrderCard__image"
              src={`${IMAGE_PREFIX}${get(item, 'small_image')}`}
              alt={get(item, 'name')}
            />
          </div>
        ))}
        {itemsRemaining > 0 && (
          <div className="PastOrderCard__image-container flex justify-center items-center bg-color-gray-lighter shadow-sm radius-md">
            <Text className="bold color-black" size="small">
              {`+${itemsRemaining}`}
            </Text>
          </div>
        )}
      </div>
      <Text className="color-gray-dark pb1" size="detail">
        {itemNames}
      </Text>
      <div className="flex">
        <Button
          variant="secondary"
          className="bg-color-gray-lighter flex justify-center items-center px1 py_5 mr_5"
          onClick={onClick}
        >
          <Icon
            className="mr_5"
            variant="small"
            icon="Repeat"
            fill={get(brandContext, 'colors[gray-light]')}
          />
          <Text
            size="extrasmall"
            className="text-extrabold uppercase letter-spacing-sm color-gray-dark"
          >
            {Language.t('order.reorder')}
          </Text>
        </Button>
        <Button to={orderDetailsPath} className="flex items-center px1 py_5">
          <Text
            size="extrasmall"
            className="text-bold uppercase letter-spacing-sm color-gray"
          >
            {Language.t('order.details')}
          </Text>
        </Button>
      </div>
    </Card>
  );
});

export default PastOrderCard;
