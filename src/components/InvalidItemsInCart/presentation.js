import React from 'react';
import { Text, Card, ConfirmButtons } from 'components';
import get from 'utils/get';

const InvalidItem = React.memo(props => {
  const quantity = get(props, 'invalidItem.quantity');
  const name = get(props, 'invalidItem.product.name');

  if (!quantity || !name) return null;

  return (
    <div className="col-12 bg-color-white">
      <Text size="description">{`${quantity} x ${name}`}</Text>
    </div>
  );
});

const InvalidItemsInCart = React.memo(props => {
  const {
    localesContext: { Language },
    invalidItemsInCart,
    handleCancel,
    handleAccept
  } = props;

  return (
    <Card className="InvalidItemsInCart bg-color-gray p2">
      <div className="flex col-12 justify-center items-center">
        <Text size="cta" className="bold">
          {Language.t('invalidItemsInCart.header')}
        </Text>
      </div>
      <div className="flex col-12 pt2">
        <Text size="description">
          {Language.t('invalidItemsInCart.instructions')}
        </Text>
      </div>
      <div className="flex col-12 pt2">
        {invalidItemsInCart.map(invalidItem => (
          <InvalidItem key={invalidItem.uuid} invalidItem={invalidItem} />
        ))}
      </div>
      <div className="flex col-12 pt2">
        <ConfirmButtons
          handleConfirm={handleAccept}
          handleCancel={handleCancel}
        />
      </div>
    </Card>
  );
});

export default InvalidItemsInCart;
