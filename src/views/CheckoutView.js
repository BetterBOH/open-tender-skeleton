import React, { PureComponent } from 'react';
import get from 'utils/get';

import {
  CheckoutDetails,
  LineItemsCard,
  CheckoutOrderTotals,
  CheckoutButtons,
  CheckoutContact
} from 'components';

import { ServerErrorCodes } from 'constants/OpenTender';
import withLocales from 'lib/withLocales';

class CheckoutView extends PureComponent {
  promoCodeError = () => {
    const error = this.props.orderValidations.find(
      validation =>
        get(validation, 'code') === ServerErrorCodes.PROMO_CODE_NOT_FOUND ||
        get(validation, 'code') === ServerErrorCodes.INVALID_PROMO_CODE
    );

    if (!error) return null;

    return get(error, 'code', null);
  };

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
      <main className="CheckoutView__container px2 bg-color-gray-light container relative">
        <div className="CheckoutView__inner-column py4 col-12 mxauto">
          <div className="CheckoutView__details-container mt2">
            <CheckoutDetails
              promoCodeError={this.promoCodeError()}
              location={currentLocation}
              order={currentOrder}
              customer={currentCustomer}
              payments={creditCards}
              activePayment={activePayment}
            />
          </div>
          <div className="mt2">
            <CheckoutContact
              customer={
                userIsAuthenticated
                  ? get(currentCustomer, 'attributes')
                  : get(currentOrder, 'customer')
              }
              openTenderRef={openTenderRef}
              orderRef={orderRef}
              bindCustomerToOrder={actions.bindCustomerToOrder}
              serverErrors={orderValidations}
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
              currentLocation={currentLocation}
              openTenderRef={openTenderRef}
              orderRef={orderRef}
              submitOrder={get(actions, 'submitOrder')}
              canSubmitOrder={canSubmitOrder}
              submitOrderStatus={submitOrderStatus}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default withLocales(CheckoutView);
