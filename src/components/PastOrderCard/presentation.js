import React from 'react';
import get from 'utils/get';
import { DateTime } from 'luxon';
import { DATE_SHORT, DATE_FULL } from 'constants/DateTimeFormats';
import { getConfig } from 'lib/MutableConfig';
import ConfigKeys from 'constants/ConfigKeys';

import { Card, Text, Button, Icon } from 'components';

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

  // TODO: add real item images after creating selector

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
            className="PastOrderCard__image bg-color-gray shadow-md radius-md"
          />
        ))}
        {itemsRemaining > 0 && (
          <div className="PastOrderCard__image flex justify-center items-center bg-color-gray shadow-md radius-md">
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
          className="bg-color-gray-light flex justify-center items-center px1 py_5"
          onClick={onClick}
        >
          <div className="PastOrderCard__button-icon mr_5">
            <Icon icon="Repeat" fill={get(brandContext, 'colors.gray')} />
          </div>
          <Text
            size="extrasmall"
            className="text-extrabold uppercase letter-spacing-sm color-gray-dark"
          >
            {Language.t('order.reorder')}
          </Text>
        </Button>
        <Button
          to={orderDetailsPath}
          variant="secondary"
          className="flex items-center p_5 ml_5"
        >
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
