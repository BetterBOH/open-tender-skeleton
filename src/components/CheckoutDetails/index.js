import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPromoCode } from 'brandibble-redux';
import withDrawer from 'lib/withDrawer';

import LocationModel from 'constants/Models/LocationModel';
import OrderModel from 'constants/Models/OrderModel';
import OrderRefModel from 'constants/Models/OrderRefModel';
import CustomerModel from 'constants/Models/CustomerModel';
import PaymentModel from 'constants/Models/PaymentModel';

class CheckoutDetails extends PureComponent {
  static propTypes = {
    location: LocationModel.propTypes,
    order: OrderModel.propTypes,
    orderRef: OrderRefModel.propTypes,
    actions: PropTypes.shape({
      setPromoCode: PropTypes.func
    }),
    customer: CustomerModel.propTypes,
    payments: PropTypes.arrayOf(PaymentModel.propTypes),
    activePayment: PaymentModel.propTypes,
    promoCodeErrors: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    location: LocationModel.defaultProps,
    order: OrderModel.defaultProps,
    orderRef: OrderRefModel.defaultProps,
    actions: {
      setPromoCode: f => f
    },
    customer: CustomerModel.defaultProps,
    payments: [],
    activePayment: PaymentModel.defaultProps,
    promoCodeErrors: []
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
      activePayment,
      promoCodeErrors,
      handleClickAddPayment,
      handleClickEditServiceTypeTime,
      handleClickChangeLocation,
      handleClickChangeDeliveryAddress
    } = this.props;

    return RegistryLoader(
      {
        location,
        order,
        customer,
        payments,
        activePayment,
        guestCreditCard: get(order, 'credit_card', null),
        promoCodeErrors,
        handleSetPromoCode: this.handleSetPromoCode,
        handleClickAddPayment,
        handleClickEditServiceTypeTime,
        handleClickChangeLocation,
        handleClickChangeDeliveryAddress
      },
      'components.CheckoutDetails',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  orderRef: get(state, 'openTender.session.order.ref')
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
)(withDrawer(CheckoutDetails));
