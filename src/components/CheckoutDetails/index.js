import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPromoCode } from 'brandibble-redux';
import { setDrawer } from 'state/actions/ui/drawerActions';
import DrawerTypes from 'constants/DrawerTypes';

import LocationModel from 'constants/Models/LocationModel';
import OrderModel from 'constants/Models/OrderModel';
import CustomerModel from 'constants/Models/CustomerModel';
import PaymentModel from 'constants/Models/PaymentModel';

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
    payments: PropTypes.objectOf(PaymentModel.propTypes),
    activePayment: PaymentModel.propTypes,
    promoCodeErrors: PropTypes.array
  };

  static defaultProps = {
    location: LocationModel.defaultProps,
    order: OrderModel.defaultProps,
    customer: CustomerModel.defaultProps,
    payments: null,
    activePayment: PaymentModel.defaultProps,
    promoCodeErrors: []
  };

  handleSetPromoCode = promoCode => {
    const { orderRef, actions } = this.props;

    return actions.setPromoCode(orderRef, promoCode);
  };

  handleClickAddPayment = () => {
    const { actions } = this.props;

    return actions.setDrawer(DrawerTypes.PAYMENT_METHODS);
  };

  handleClickEditServiceTypeTime = () => {
    const { actions } = this.props;

    return actions.setDrawer(DrawerTypes.EDIT_SERVICE_TYPE_TIME);
  };

  render() {
    const {
      location,
      order,
      customer,
      payments,
      activePayment,
      setPromoCodeStatus,
      promoCodeErrors
    } = this.props;

    return RegistryLoader(
      {
        location,
        order,
        customer,
        payments,
        activePayment,
        guestCreditCard: get(order, 'credit_card', null),
        handleClickAddPayment: this.handleClickAddPayment,
        handleClickEditServiceTypeTime: this.handleClickEditServiceTypeTime,
        handleSetPromoCode: this.handleSetPromoCode,
        setPromoCodeStatus,
        promoCodeErrors
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
      setDrawer,
      setPromoCode
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutDetails);
