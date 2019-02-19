import React, { Fragment } from 'react';
import get from 'utils/get';
import singularOrPlural from 'utils/singularOrPlural';

import { LineItemRow, Card, Text } from 'components';

const LineItemsCard = React.memo(props => {
  const {
    items,
    handleDecrement,
    handleIncrement,
    isConfigurable,
    showItemsWithoutQuantity,
    Language
  } = props;

  const itemCount = items.length;

  const cardTitle = () => {
    // menu
    if (isConfigurable && showItemsWithoutQuantity) {
      return null;
    }

    // cart
    if (isConfigurable && !showItemsWithoutQuantity) {
      return (
        <div className="mb1">
          <Text size="extrasmall" className="bold">
            {`${itemCount} ${singularOrPlural(
              itemCount,
              Language.t('cart.item'),
              Language.t('cart.items')
            )}`}
          </Text>
        </div>
      );
    }

    // checkout and past order
    if (!isConfigurable) {
      return (
        <div className="mb1">
          <Text size="cta" className="bold">
            {Language.t('checkout.items')}
          </Text>
        </div>
      );
    }
  };

  return (
    <Fragment>
      {cardTitle()}
      {itemCount ? (
        <Card className="LineItemsCard px1_5 py_5">
          {items.map(item => (
            <LineItemRow
              key={get(item, 'uuid')}
              lineItem={item}
              isConfigurable={isConfigurable}
              handleDecrement={() => handleDecrement(item)}
              handleIncrement={() => handleIncrement(item)}
              Language={Language}
            />
          ))}
        </Card>
      ) : null}
    </Fragment>
  );
});

export default LineItemsCard;
