import React, { PureComponent } from 'react';
import get from 'utils/get';

import {
  CheckoutDetails,
  LineItemsCard,
  CheckoutOrderTotals,
  CheckoutButtons,
  CheckoutContact
} from 'components';

import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';

class CheckoutView extends PureComponent {
  promoCodeError = () => {
    const error = this.props.orderValidations.find(validation => {
      if (get(validation, 'code') === 'orders.validate.promo_code_not_found') {
        return true;
      }
    });

    if (!error) return null;

    const Language = get(getConfig(ConfigKeys.LOCALES), 'Language');

    return Language.t('checkout.errors.promoCodeIsInvalid');
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

export default CheckoutView;
