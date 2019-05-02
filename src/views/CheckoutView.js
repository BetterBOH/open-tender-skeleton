import React, { PureComponent } from 'react';
import get from 'utils/get';

import {
  CheckoutDetails,
  LineItemsCard,
  CheckoutOrderTotals,
  CheckoutButtons,
  CheckoutAuthContact,
  CheckoutGuestContact,
  Card
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
      userIsAuthenticated,
      creditCards,
      activePayment,
      lineItemsData,
      orderTotalsData,
      canSubmitOrder,
      orderValidations,
      submitOrderStatus
    } = this.props;

    return (
      <main className="CheckoutView px2 pb4 md:pb0 bg-color-gray-light container relative">
        <div className="CheckoutView__inner-column py4 col-12 mxauto">
          <div className="CheckoutView__details-container mt2">
            <CheckoutDetails
              location={currentLocation}
              order={currentOrder}
              customer={currentCustomer}
              payments={creditCards}
              activePayment={activePayment}
            />
          </div>
          <div className="mt2">
            {userIsAuthenticated ? (
              <CheckoutAuthContact customer={currentCustomer} />
            ) : (
              <CheckoutGuestContact
                customer={get(currentOrder, 'customer')}
                openTenderRef={openTenderRef}
                orderRef={orderRef}
                bindCustomerToOrder={actions.bindCustomerToOrder}
                serverErrors={orderValidations}
              />
            )}
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
          <div className="CheckoutView__buttons-container col-12 mt3 l0 b0 z1">
            <Card
              variant="checkout-card"
              className="CheckoutView__buttons-card bg-color-white shadow-md p1_5"
            >
              <CheckoutButtons
                currentLocation={currentLocation}
                openTenderRef={openTenderRef}
                orderRef={orderRef}
                submitOrder={get(actions, 'submitOrder')}
                canSubmitOrder={canSubmitOrder}
                submitOrderStatus={submitOrderStatus}
              />
            </Card>
          </div>
        </div>
      </main>
    );
  }
}

export default CheckoutView;
