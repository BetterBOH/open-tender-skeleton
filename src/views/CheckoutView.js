import React, { PureComponent } from 'react';
import withComponents from 'lib/withComponents';

import {
  Text,
  CheckoutDetails,
  LineItemsCard,
  CheckoutOrderTotals,
  CheckoutButtons
} from 'components';

class CheckoutView extends PureComponent {
  render() {
    const {
      currentLocation,
      currentOrder,
      currentCustomer,
      creditCards,
      lineItemsData,
      orderTotalsData
    } = this.props;

    return (
      <main className="CheckoutView__container px2 bg-color-white container relative">
        <div className="CheckoutView__inner-column py4 col-12 mxauto">
          <Text size="headline">
            Almost ready! Just confirm a few details to finish placing your
            order.
          </Text>
          <div className="CheckoutView__details-container pt2">
            <CheckoutDetails
              location={currentLocation}
              order={currentOrder}
              customer={currentCustomer}
              payments={creditCards}
            />
          </div>
          <div className="CheckoutView__summary-container pt2 relative z1">
            <LineItemsCard
              items={lineItemsData}
              isConfigurable={false}
              showItemsWithoutQuantity={false}
              customer={currentCustomer}
            />
          </div>
          <CheckoutOrderTotals checkoutOrderTotalsData={orderTotalsData} />
          <div className="CheckoutView__buttons-container mt3 md:mx2">
            <CheckoutButtons canSubmitOrder={false} />
          </div>
        </div>
      </main>
    );
  }
}

export default withComponents(CheckoutView);
