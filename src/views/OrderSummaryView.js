import React, { PureComponent, Fragment } from 'react';
import get from 'utils/get';
import { OPEN } from 'constants/OpenTender';
import currency from 'currency.js';
import withLocales from 'lib/withLocales';
import getRoutes from 'utils/getRoutes';

import {
  Text,
  OrderSummaryHeader,
  LocationCard,
  OrderSummaryItemsCard,
  OrderRating,
  PastOrderDetails,
  OrderTotals,
  OrderSummaryButtons
} from 'components';

/**
 * TO-DO:
 * - Wire up feedback button: issue #77
 */

class OrderSummaryView extends PureComponent {
  render() {
    const {
      localesContext,
      actions,
      model,
      history,
      userIsAuthenticated
    } = this.props;
    const { Language } = localesContext;
    const [order, location] = model;
    const orderTotalsData = [
      {
        label: 'Subtotal + tax',
        price: currency(order.subtotal).add(order.tax)
      },
      { label: 'Rewards', price: order.discount },
      { label: 'Total', price: order.total }
    ];

    return (
      <main className="OrderSummaryView bg-color-gray-light px2 container relative">
        <div className="OrderSummaryView__inner-column py4 col-12 mxauto">
          <div className="OrderSummaryView__header">
            <OrderSummaryHeader
              orderId={get(order, 'orders_id')}
              orderDate={get(order, 'requested_date')}
              orderTotal={get(order, 'total')}
            />
          </div>
          <div className="OrderSummaryView__location-card-container pt2">
            <LocationCard
              location={location}
              onOrderClick={() => history.push(getRoutes().WELCOME)}
            />
          </div>
          {userIsAuthenticated ? (
            <Fragment>
              <div className="OrderSummaryView__items-card-container pt2">
                <OrderSummaryItemsCard
                  items={get(order, 'items') || get(order, 'cart', [])}
                />
              </div>
              <div className="OrderSummaryView__rating-container pt2">
                <div className="mb1">
                  <Text size="cta" className="bold">
                    {Language.t('orderSummary.howWasIt')}
                  </Text>
                </div>
                <OrderRating orderId={get(order, 'orders_id')} />
              </div>
              <div className="OrderSummaryView__order-details-container relative z1 pt2">
                <PastOrderDetails order={order} />
              </div>
              <OrderTotals data={orderTotalsData} />
            </Fragment>
          ) : (
            <Fragment>
              <div className="OrderSummaryView__items-card-container relative pt2 z1">
                <OrderSummaryItemsCard
                  items={get(order, 'items') || get(order, 'cart', [])}
                />
              </div>
              <OrderTotals data={orderTotalsData} />
            </Fragment>
          )}

          <div className="OrderSummaryView__buttons-container mt3 md:mx2">
            <OrderSummaryButtons
              userIsAuthenticated={userIsAuthenticated}
              order={order}
              attemptReorder={get(actions, 'attemptReorder')}
              orderIsPending={get(order, 'status') === OPEN}
              createSystemNotification={get(
                actions,
                'createSystemNotification'
              )}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default withLocales(OrderSummaryView);
