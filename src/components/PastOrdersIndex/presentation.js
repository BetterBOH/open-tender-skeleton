import React, { Fragment } from 'react';

import { Text } from 'components';

const PastOrdersIndex = React.memo(props => {
  const { orders, localesContext } = props;
  const { Language } = localesContext;
  const numberOfOrders = orders.length;

  return (
    <Fragment>
      <Text size="headline">{Language.t('pastOrders.myPastOrders')}</Text>
      <Text size="description">
        {numberOfOrders
          ? `${Language.t(
              'pastOrders.youHavePlaced'
            )} ${numberOfOrders} ${Language.t(
              'pastOrders.orders'
            )} ${Language.t('pastOrders.inTotal')} ${Language.t(
              'pastOrders.description'
            )}`
          : Language.t('pastOrders.noOrders')}
      </Text>
    </Fragment>
  );
});

export default PastOrdersIndex;
