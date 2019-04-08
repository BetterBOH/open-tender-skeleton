import React, { Component } from 'react';
import withComponents from 'lib/withComponents';

class OrderSummaryView extends Component {
  render() {
    return (
      <main className="container">
        <div className="relative overflow-auto p1 md:p2">
          <h1>Order Summary View</h1>
        </div>
      </main>
    );
  }
}

export default withComponents(OrderSummaryView);
