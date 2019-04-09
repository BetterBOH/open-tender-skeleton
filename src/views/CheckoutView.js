import React, { PureComponent } from 'react';
import withComponents from 'lib/withComponents';
import get from 'utils/get';

import {
  CheckoutDetails,
  LineItemsCard,
  CheckoutOrderTotals,
  CheckoutButtons
} from 'components';

class CheckoutView extends PureComponent {
  render() {
    const {
      actions,
      openTenderRef,
      orderRef,
      currentLocation,
      currentOrder,
      currentCustomer,
      creditCards,
      lineItemsData,
      orderTotalsData,
      canSubmitOrder
    } = this.props;

    return (
      <main className="CheckoutView__container px2 bg-color-white container relative">
        <div className="CheckoutView__inner-column py4 col-12 mxauto">
          <div className="CheckoutView__details-container pt2">
            <CheckoutDetails
              location={currentLocation}
              order={currentOrder}
              customer={currentCustomer}
              payments={creditCards}
              actions={actions}
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
            <CheckoutButtons
              currentLocationId={get(currentLocation, 'location_id')}
              openTenderRef={openTenderRef}
              orderRef={orderRef}
              submitOrder={get(actions, 'submitOrder')}
              canSubmitOrder={canSubmitOrder}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default withComponents(CheckoutView);
