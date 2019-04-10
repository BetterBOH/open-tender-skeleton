import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import LocationModel from 'constants/Models/LocationModel';
import OrderModel from 'constants/Models/OrderModel';
import CustomerModel from 'constants/Models/CustomerModel';
import PaymentModel from 'constants/Models/PaymentModel';

import get from 'utils/get';
import getActivePaymentMethod from 'utils/getActivePaymentMethod';
import withLocales from 'lib/withLocales';

class CheckoutDetails extends PureComponent {
  static propTypes = {
    location: LocationModel.propTypes,
    order: OrderModel.propTypes,
    customer: CustomerModel.propTypes,
    payments: PropTypes.arrayOf(PaymentModel)
  };

  static defaultProps = {
    location: LocationModel.defaultProps,
    order: OrderModel.defaultProps,
    customer: CustomerModel.defaultProps,
    payments: []
  };

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

export default withLocales(CheckoutDetails);
