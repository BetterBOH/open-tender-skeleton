import React, { Component } from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import {
  Text,
  OrderSummaryHeader,
  LocationCard,
  OrderSummaryItemsCard,
  Rating,
  PastOrderDetails,
  OrderTotals,
  OrderSummaryButtons
} from 'components';

/**
 * TODO:
 * - Wire Up Rating component
 * - Wire up Buttons
 */

class OrderSummaryView extends Component {
  render() {
    const order = get(this, 'props.model[0]');
    const location = get(this, 'props.model[1]');
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
            <LocationCard location={location} />
          </div>
          <div className="OrderSummaryView__items-card-container pt2">
            <OrderSummaryItemsCard items={get(order, 'items', [])} />
          </div>
          <div className="OrderSummaryView__rating-container pt2">
            <div className="mb1">
              <Text size="cta" className="bold">
                How was it?
              </Text>
            </div>
            <Rating />
          </div>
          <div className="OrderSummaryView__order-details-container relative z1 pt2">
            <PastOrderDetails order={order} />
          </div>
          <OrderTotals data={orderTotalsData} />
          <div className="OrderSummaryView__buttons-container mt3 md:mx2">
            <OrderSummaryButtons />
          </div>
        </div>
      </main>
    );
  }
}

export default OrderSummaryView;
