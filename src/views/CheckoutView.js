import React, { PureComponent } from 'react';
import withComponents from 'lib/withComponents';

import { Text, CheckoutDetails } from 'components';

class CheckoutView extends PureComponent {
  render() {
    const {
      currentLocation,
      currentOrder,
      currentCustomer,
      creditCards
    } = this.props;

    return (
      <main className="CheckoutView__container bg-color-white container relative">
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
        </div>
      </main>
    );
  }
}

export default withComponents(CheckoutView);
