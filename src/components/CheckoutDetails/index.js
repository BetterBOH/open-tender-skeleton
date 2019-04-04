import React, { PureComponent } from 'react';
import isEmpty from 'lodash/isEmpty';
import RegistryLoader from 'lib/RegistryLoader';
import CheckoutDetailsModel from 'constants/Models/CheckoutDetailsModel';
import withLocales from 'lib/withLocales';
import get from 'utils/get';
import getActivePaymentMethod from 'utils/getActivePaymentMethod';

class CheckoutDetails extends PureComponent {
  render() {
    const { location, order, customer, payments, localesContext } = this.props;
    const activeCreditCardId = get(order, 'credit_card.customer_card_id');

    const locationName = get(location, 'name');
    const serviceType = get(order, 'service_type');
    const requestedAt = get(order, 'requested_at');
    const phoneNumber = get(customer, 'phone_number');
    const activePaymentMethod = getActivePaymentMethod(
      activeCreditCardId,
      payments
    );
    const promoCode = get(order, 'promo_code');

    return RegistryLoader(
      {
        localesContext,
        locationName,
        serviceType,
        requestedAt,
        phoneNumber,
        activePaymentMethod,
        promoCode
      },
      'components.CheckoutDetails',
      () => import('./presentation.js')
    );
  }
}

CheckoutDetails.propTypes = {
  checkoutDetails: CheckoutDetailsModel.propTypes
};

CheckoutDetails.defaultProps = {
  checkoutDetails: CheckoutDetailsModel.defaultProps
};

export { CheckoutDetails };
export default withLocales(CheckoutDetails);
