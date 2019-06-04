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
      authenticateUserStatus,
      payments,
      activePayment,
      lineItemsData,
      orderTotalsData,
      canSubmitOrder,
      orderValidations,
      submitOrderStatus,
      promoCodeErrors,
      authenticationErrors
    } = this.props;

    return (
      <main className="CheckoutView pb0 bg-color-gray-lighter container relative md:pb3">
        <div className="inner-column px2 pt3 col-12 mxauto">
          <div className="CheckoutView__details-container mt2">
            <CheckoutDetails
              promoCodeErrors={promoCodeErrors}
              location={currentLocation}
              order={currentOrder}
              customer={currentCustomer}
              payments={payments}
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
                orderValidationErrors={orderValidations}
                authenticateUser={actions.authenticateUser}
                authenticateUserStatus={authenticateUserStatus}
                authenticationErrors={authenticationErrors}
                createSystemNotification={actions.createSystemNotification}
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
        </div>
        <div className="CheckoutView__buttons-container col-12 mt3 md:px2 md:mxauto l0 b0 sticky z1">
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
      </main>
    );
  }
}

export default CheckoutView;
