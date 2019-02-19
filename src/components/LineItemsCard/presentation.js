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
    Language
  } = props;
  const itemCount = items.length;

  return (
    <Fragment>
      <div className="mb1">
        <Text size="extrasmall" className="bold">
          {`${itemCount} ${singularOrPlural(
            itemCount,
            Language.t('cart.item'),
            Language.t('cart.items')
          )}`}
        </Text>
      </div>
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
    </Fragment>
  );
});

export default LineItemsCard;
