import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import get from 'utils/get';
import getLocationSlug from 'utils/getLocationSlug';
import getRoutes from 'utils/getRoutes';
import { currentLocation, lineItemsSubtotal } from 'state/selectors';

import CustomerModel from 'constants/Models/CustomerModel';
import OrderModel from 'constants/Models/OrderModel';
import LineItemModel from 'constants/Models/LineItemModel';
import LocationModel from 'constants/Models/LocationModel';

class MiniCart extends PureComponent {
  static propTypes = {
    handleClose: PropTypes.func,
    currentOrder: OrderModel.propTypes,
    currentCustomer: CustomerModel.propTypes,
    lineItemsData: PropTypes.arrayOf(LineItemModel.propTypes),
    currentLocation: LocationModel.propTypes,
    subtotal: PropTypes.string
  };

  static defaultProps = {
    handleClose: f => f,
    currentOrder: OrderModel.defaultProps,
    currentCustomer: CustomerModel.defaultProps,
    lineItemsData: [],
    currentLocation: LocationModel.defaultProps,
    subtotal: ''
  };

  goToCurrentMenuPath = () => {
    const { currentLocation, handleClose, history } = this.props;

    const slug = getLocationSlug(currentLocation);

    handleClose();
    return history.push(`/menus/${slug}`);
  };

  goToCheckout = () => {
    const { handleClose, history } = this.props;
    const checkoutPath = getRoutes().CHECKOUT;

    handleClose();
    return history.push(checkoutPath);
  };

  render() {
    const {
      handleClose,
      currentOrder,
      lineItemsData,
      currentCustomer,
      currentLocation,
      subtotal
    } = this.props;

    return RegistryLoader(
      {
        handleClose,
        handleAddMore: this.goToCurrentMenuPath,
        handleCheckout: this.goToCheckout,
        currentOrder,
        lineItemsData,
        currentCustomer,
        currentLocation,
        subtotal
      },
      'components.MiniCart',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  currentOrder: get(state, 'openTender.session.order.orderData'),
  lineItemsData: get(state, 'openTender.session.order.lineItemsData'),
  currentCustomer: get(state, 'openTender.user.attributes'),
  currentLocation: currentLocation(state),
  subtotal: lineItemsSubtotal(state)
});

export default connect(mapStateToProps)(withRouter(MiniCart));
