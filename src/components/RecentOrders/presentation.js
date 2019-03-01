import React, { Fragment } from 'react';
import get from 'utils/get';

import { Text, LinkButton } from 'components';
import { PastOrderCard } from 'components/PastOrderCard';

const RecentOrders = React.memo(props => {
  const { orders, localesContext } = props;
  const { Language } = localesContext;
  const numberOfOrders = orders.length;

  return (
    <div className="RecentOrders flex flex-col">
      <Text className="mb1" size="cta">
        {Language.t('dashboard.recentOrders.headline')}
      </Text>
      <Text className="color-gray-dark" size="description">
        {Language.t('dashboard.recentOrders.adlib')}
      </Text>
      {!!numberOfOrders ? (
        <Fragment>
          <div className="flex flex-nowrap overflow-x-auto mt1_5 mb_5">
            {orders.map(order => (
              <div className="RecentOrders__card mb1" key={get(order, 'id')}>
                <PastOrderCard order={order} localesContext={localesContext} />
              </div>
            ))}
          </div>
          <LinkButton
            className="text-semibold"
            variant="with-top-border"
            iconRight="Details"
            text={`${Language.t(
              'dashboard.recentOrders.browseAll'
            )} ${Language.t('dashboard.recentOrders.orders')}`}
          />
        </Fragment>
      ) : (
        <Text className="mt1_5" size="description">
          {Language.t('dashboard.recentOrders.noOrders')}
        </Text>
      )}
    </div>
  );
});

export default RecentOrders;
