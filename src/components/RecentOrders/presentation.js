import React from 'react';

import { Text } from 'components';
import { PastOrderCard } from 'components/PastOrderCard';

const RecentOrders = React.memo(props => {
  const { orders, localesContext } = props;
  const { Language } = localesContext;
  const numberOfOrders = orders.length;
  const moreThanOneOrder = numberOfOrders > 1;

  return (
    <div className="flex flex-col">
      <Text className="mb1" size="cta">
        {Language.t('dashboard.recentOrders.headline')}
      </Text>
      <Text className="color-gray-dark" size="description">
        {Language.t('dashboard.recentOrders.adlib')}
      </Text>
      <div className="mt2">
        {!!numberOfOrders &&
          orders.map(order => (
            <div className="mb1">
              <PastOrderCard order={order} localesContext={localesContext} />
            </div>
          ))}
      </div>
      {moreThanOneOrder && (
        <Text className="color-gray-dark" size="description">
          {`${Language.t(
            'dashboard.recentOrders.browseAll'
          )} ${numberOfOrders} ${Language.t('dashboard.recentOrders.orders')}`}
        </Text>
      )}
    </div>
  );
});

export default RecentOrders;
