import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import withLocales from 'lib/withLocales';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPromoCode } from 'brandibble-redux';

import LocationModel from 'constants/Models/LocationModel';
import OrderModel from 'constants/Models/OrderModel';
import CustomerModel from 'constants/Models/CustomerModel';
import PaymentModel from 'constants/Models/PaymentModel';
import { PaymentMethods, AddPromoCode } from 'components';

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
    payments: PropTypes.arrayOf(PaymentModel.propTypes)
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
      setPromoCodeStatus,
      localesContext
    } = this.props;

    const activeCreditCardId = get(order, 'credit_card.customer_card_id');
    const activePaymentMethod = get(
      payments,
      `paymentsById[${activeCreditCardId}]`
    );
    const activePaymentMethodText = activePaymentMethod
      ? `${activePaymentMethod.card_type} x${activePaymentMethod.last4}`
      : null;

    const formattedCheckoutDetails = [
      {
        label: localesContext.Language.t('checkout.location'),
        icon: 'Marker',
        value: get(location, 'name', '')
      },
      {
        label: localesContext.Language.t('checkout.serviceType'),
        icon: 'Bag',
        value: get(order, 'service_type', '')
      },
      {
        label: localesContext.Language.t('checkout.pickupTime'),
        icon: 'Clock',
        value: get(order, 'requested_at', '')
      },
      {
        label: localesContext.Language.t('checkout.contact'),
        icon: 'Phone',
        value: get(
          customer,
          'phone_number',
          localesContext.Language.t('checkout.placeholders.addPhoneNumber')
        )
      },
      {
        label: localesContext.Language.t('checkout.payment'),
        icon: 'CreditCard',
        value:
          activePaymentMethodText ||
          localesContext.Language.t('checkout.placeholders.addPayment'),
        children: (
          <PaymentMethods className="CheckoutDetails__payment-dropdown none lg:block" />
        ),
        renderChildrenInDropdown: true
      },
      {
        label: localesContext.Language.t('checkout.promo'),
        icon: 'Gift',
        value: get(
          order,
          'promo_code',
          localesContext.Language.t('checkout.placeholders.optional')
        ),
        children: <AddPromoCode handleSubmit={this.handleSetPromoCode} />
      }
    ];

    return RegistryLoader(
      {
        formattedCheckoutDetails,
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
)(withLocales(CheckoutDetails));
