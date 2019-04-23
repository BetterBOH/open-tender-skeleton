import React, { PureComponent } from 'react';
import get from 'utils/get';

import {
  CheckoutDetails,
  LineItemsCard,
  CheckoutOrderTotals,
  CheckoutButtons,
  CheckoutContact
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
      <main className="CheckoutView__container px2 bg-color-gray-light container relative">
        <div className="CheckoutView__inner-column py4 col-12 mxauto">
          <div className="CheckoutView__details-container mt2">
            <CheckoutDetails
              location={currentLocation}
              order={currentOrder}
              customer={currentCustomer}
              payments={creditCards}
            />
          </div>
          <div className="mt2">
            <CheckoutContact
              customer={get(currentCustomer, 'attributes')}
              currentOrder={currentOrder}
              openTenderRef={openTenderRef}
              orderRef={orderRef}
              validateCurrentOrder={actions.validateCurrentOrder}
              bindCustomerToOrder={actions.bindCustomerToOrder}
            />
          </div>
          <div className="CheckoutView__summary-container mt2 relative z1">
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

export default CheckoutView;
