import React, { Fragment } from 'react';
import get from 'utils/get';
import singularOrPlural from 'utils/singularOrPlural';

import { Card, Text, LineItemRow } from 'components';

const LineItemsCard = React.memo(props => {
  const {
    items,
    isConfigurable,
    showItemsWithoutQuantity,
    customer,
    localesContext
  } = props;

  const { Language } = localesContext;
  const itemCount = get(items, 'length', 0);

  const cardTitle = () => {
    // menu
    if (isConfigurable && showItemsWithoutQuantity) {
      return null;
    }

    // cart
    if (isConfigurable && !showItemsWithoutQuantity) {
      const forCustomer = !!get(customer, 'first_name') ? (
        <Fragment>
          <span className="mx_25">{Language.t('cart.forCustomer')}</span>
          <span className="underline">{get(customer, 'first_name')}</span>
        </Fragment>
      ) : null;

      return (
        <div className="mb1 text-center">
          <Text size="extrasmall" className="bold color-gray-dark uppercase">
            {`${itemCount} ${singularOrPlural(
              itemCount,
              Language.t('cart.item'),
              Language.t('cart.items')
            )}`}
            {forCustomer}
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
              item={item}
              isConfigurable={isConfigurable}
              localesContext={localesContext}
            />
          ))}
        </Card>
      ) : null}
    </Fragment>
  );
});

export default LineItemsCard;
