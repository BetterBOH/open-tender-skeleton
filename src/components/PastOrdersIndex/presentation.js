import React from 'react';
import { Text, PastOrderCard, Card, Button } from 'components';

const PastOrdersIndex = React.memo(
  ({ orders, localesContext, handleAttemptReorder }) => (
    <div className="PastOrdersIndex flex flex-col">
      <Text className="px1 text-bold mb_5" size="cta">
        {localesContext.Language.t('pastOrders.recentOrders')}
      </Text>
      <Text className="color-gray-dark px1 mb1" size="description">
        {orders.length
          ? localesContext.Language.t('pastOrders.theUsual')
          : localesContext.Language.t('pastOrders.noOrders')}
      </Text>
      {!!orders.length ? (
        <div className="PastOrdersIndex__orders-container flex flex-nowrap overflow-x-auto overflow-y-hidden py1">
          {orders.map(order => (
            <PastOrderCard
              key={order.id}
              order={order}
              onClick={() => handleAttemptReorder(order)}
            />
          ))}
        </div>
      ) : (
        <Card className="p1">
          <Text className="color-gray-dark mb1" size="description">
            {localesContext.Language.t('pastOrders.afterPlacedOrders')}
          </Text>
          <Button
            variant="primary"
            className="bg-color-gray-dark flex items-center justify-center"
            to="/"
          >
            <Text size="cta" className="color-white text-bold">
              {localesContext.Language.t('pastOrders.placeAnOrder')}
            </Text>
          </Button>
        </Card>
      )}
    </div>
  )
);

export default PastOrdersIndex;
