import React, { Fragment } from 'react';
import get from 'utils/get';

import { Card, Text, OrderSummaryItemRow } from 'components';

const OrderSummaryItemsCard = React.memo(({ localesContext, items }) => {
  const { Language } = localesContext;
  const itemCount = items.length;

  return (
    <Fragment>
      <div className="mb1">
        <Text size="cta" className="bold">
          {Language.t('checkout.items')}
        </Text>
      </div>
      {itemCount ? (
        <Card className="OrderSummaryItemsCard px1_5 py_5">
          {items.map(item => (
            <OrderSummaryItemRow key={get(item, 'uuid')} item={item} />
          ))}
        </Card>
      ) : null}
    </Fragment>
  );
});

export default OrderSummaryItemsCard;
