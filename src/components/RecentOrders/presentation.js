import React from 'react';

import { Text, LinkButton } from 'components';
import { PastOrderCard } from 'components/PastOrderCard';

const RecentOrders = React.memo(props => {
  const { orders, localesContext } = props;
  const { Language } = localesContext;
  const numberOfOrders = orders.length;

  return (
    <div className="flex flex-col">
      <Text className="mb1" size="cta">
        {Language.t('dashboard.recentOrders.headline')}
      </Text>
      <Text className="color-gray-dark" size="description">
        {Language.t('dashboard.recentOrders.adlib')}
      </Text>
      <div className="mt2 mb_5">
        {!!numberOfOrders &&
          orders.map(order => (
            <div className="mb1">
              <PastOrderCard order={order} localesContext={localesContext} />
            </div>
          ))}
      </div>
      <LinkButton
        className="text-semibold"
        variant="with-top-border"
        onClick={f => f}
        iconRight="Details"
        text={`${Language.t('dashboard.recentOrders.browseAll')} ${Language.t(
          'dashboard.recentOrders.orders'
        )}`}
      />
    </div>
  );
});

export default RecentOrders;
