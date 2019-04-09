import React, { Component } from 'react';
import get from 'utils/get';

import { OrderSummaryHeader } from 'components';

class OrderSummaryView extends Component {
  render() {
    const order = get(this, 'props.model[0]');
    const location = get(this, 'props.model[1]');

    return (
      <main className="bg-color-white container relative">
        <div className="relative overflow-auto p1 md:p2">
          <OrderSummaryHeader
            orderId={get(order, 'orders_id')}
            orderDate={get(order, 'requested_date')}
            orderTotal={get(order, 'total')}
          />
        </div>
      </main>
    );
  }
}

export default OrderSummaryView;
