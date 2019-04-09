import React, { Component } from 'react';
import withComponents from 'lib/withComponents';
import get from 'utils/get';

class OrderSummaryView extends Component {
  render() {
    const order = get(this, 'props.model');

    return (
      <main className="container">
        <div className="relative overflow-auto p1 md:p2">
          <h1>{get(order, 'orders_id')}</h1>
        </div>
      </main>
    );
  }
}

export default withComponents(OrderSummaryView);
