import React from 'react';
import { Text, PastOrderCard, Card, Button } from 'components';

const PastOrdersIndex = React.memo(
  ({
    orders,
    pastOrdersToShow,
    handleShowMoreOrders,
    localesContext,
    handleAttemptReorder
  }) => (
    <div className="flex flex-col">
      <Text className="px1 mb_5" size="cta">
        {localesContext.Language.t('pastOrders.recentOrders')}
      </Text>
      <Text className="color-gray-dark px1 mb1" size="description">
        {orders.length
          ? localesContext.Language.t('pastOrders.theUsual')
          : localesContext.Language.t('pastOrders.noOrders')}
      </Text>
      {!!orders.length ? (
        <div className="">
          {orders.slice(0, pastOrdersToShow).map(order => (
            <div key={order.id} className="mb1">
              <PastOrderCard
                order={order}
                localesContext={localesContext}
                onClick={() => handleAttemptReorder(order)}
              />
            </div>
          ))}
          {orders.length > pastOrdersToShow && (
            <Button
              variant="primary"
              className="bg-color-gray-dark col-12"
              onClick={() => handleShowMoreOrders()}
            >
              <Text size="cta" className="color-white text-bold">
                {localesContext.Language.t('pastOrders.showMore')}
              </Text>
            </Button>
          )}
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
