import React from 'react';
import singularOrPlural from 'utils/singularOrPlural';

import { Text } from 'components';
import { PastOrderCard } from 'components/PastOrderCard';

const PastOrdersIndex = React.memo(props => {
  const { orders, localesContext } = props;
  const { Language } = localesContext;
  const numberOfOrders = orders.length;

  return (
    <div className="flex flex-col">
      <Text className="mb1" size="headline">
        {Language.t('pastOrders.myPastOrders')}
      </Text>
      <Text className="color-gray-dark" size="description">
        {numberOfOrders
          ? `${Language.t(
              'pastOrders.youHavePlaced'
            )} ${numberOfOrders} ${singularOrPlural(
              numberOfOrders,
              Language.t('pastOrders.order'),
              Language.t('pastOrders.orders')
            )}
            ${Language.t('pastOrders.inTotal')} ${Language.t(
              'pastOrders.description'
            )}`
          : Language.t('pastOrders.noOrders')}
      </Text>
      {!!numberOfOrders && (
        <div className="mt2">
          {orders.map(order => (
            <div className="mb1">
              <PastOrderCard order={order} localesContext={localesContext} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default PastOrdersIndex;
