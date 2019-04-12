import React from 'react';
import { Text, PastOrderCard, Card, Button } from 'components';

const PastOrdersIndex = React.memo(props => {
  const { orders, localesContext } = props;
  const { Language } = localesContext;
  const numberOfOrders = orders.length;

  return (
    <div className="flex flex-col">
      <Text className="px1 mb_5" size="cta">
        {Language.t('pastOrders.myPastOrders')}
      </Text>
      <Text className="color-gray-dark px1 mb1" size="description">
        {numberOfOrders
          ? Language.t('pastOrders.theUsual')
          : Language.t('pastOrders.noOrders')}
      </Text>
      {!!numberOfOrders ? (
        <div className="">
          {orders.map(order => (
            <div key={order.id} className="mb1">
              <PastOrderCard order={order} localesContext={localesContext} />
            </div>
          ))}
        </div>
      ) : (
        <Card className="p1">
          <Text className="color-gray-dark mb1" size="description">
            {Language.t('pastOrders.afterPlacedOrders')}
          </Text>
          <Button
            variant="primary"
            className="bg-color-gray-dark flex items-center justify-center"
            to="/"
          >
            <Text size="cta" className="color-white text-bold">
              {Language.t('pastOrders.placeAnOrder')}
            </Text>
          </Button>
        </Card>
      )}
    </div>
  );
});

export default PastOrdersIndex;
