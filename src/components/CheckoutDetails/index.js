import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPromoCode } from 'brandibble-redux';

import LocationModel from 'constants/Models/LocationModel';
import OrderModel from 'constants/Models/OrderModel';
import CustomerModel from 'constants/Models/CustomerModel';
import PaymentModel from 'constants/Models/PaymentModel';
import get from 'utils/get';

/**
 * TO-DO: Issue #229
 * - Validate Order on setPromoCode
 * - Surface Errors
 */

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

  handleSetPromoCode = promoCode => {
    const { orderRef, actions } = this.props;

    return actions.setPromoCode(orderRef, promoCode);
  };

  render() {
    const {
      location,
      order,
      customer,
      payments,
      setPromoCodeStatus
    } = this.props;
    const activeCreditCardId = get(order, 'credit_card.customer_card_id');

    const locationName = get(location, 'name');
    const serviceType = get(order, 'service_type');
    const requestedAt = get(order, 'requested_at');
    const phoneNumber = get(customer, 'phone_number');
    const activePaymentMethod = get(
      payments,
      `paymentsById[${activeCreditCardId}]`
    );
    const activePaymentMethodText = activePaymentMethod
      ? `${activePaymentMethod.card_type} x${activePaymentMethod.last4}`
      : null;
    const promoCode = get(order, 'promo_code');

    return RegistryLoader(
      {
        locationName,
        serviceType,
        requestedAt,
        phoneNumber,
        activePaymentMethod: activePaymentMethodText,
        promoCode,
        handleSetPromoCode: this.handleSetPromoCode,
        setPromoCodeStatus
      },
      'components.CheckoutDetails',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  orderRef: get(state, 'openTender.session.order.ref'),
  setPromoCodeStatus: get(state, 'openTender.status.setPromoCode')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setPromoCode
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutDetails);
