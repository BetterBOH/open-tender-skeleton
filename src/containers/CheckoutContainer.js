import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  validateCurrentCart,
  bindCustomerToOrder,
  fetchPayments
} from 'brandibble-redux';
import { currentLocation, userIsAuthenticated } from 'state/selectors';
import { setDrawer, resetDrawer } from 'state/actions/ui/drawerActions';

import { FULFILLED, PENDING } from 'constants/Status';
import get from 'utils/get';

class CheckoutContainer extends ContainerBase {
  view = import('views/CheckoutView');

  model = () => {
    const openTenderRef = get(this, 'props.openTenderRef');
    const validateCurrentCart = get(
      this,
      'props.actions.validateCurrentCart',
      f => f
    );
    const promises = [validateCurrentCart(openTenderRef)];
    if (get(this, 'props.userIsAuthenticated', false)) {
      const orderRef = get(this, 'props.orderRef');
      const customer = get(this, 'props.userAttributes');
      const bindCustomerToOrder = get(
        this,
        'props.actions.bindCustomerToOrder',
        f => f
      );
      promises.push(bindCustomerToOrder(orderRef, customer));
    }

    return Promise.all(promises);
  };

  componentDidUpdate(prevProps) {
    const didSetPaymentMethod =
      prevProps.setPaymentMethodStatus === PENDING &&
      this.props.setPaymentMethodStatus === FULFILLED;

    if (didSetPaymentMethod) {
      return this.props.actions.resetDrawer();
    }
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  userAttributes: get(state, 'openTender.user.attributes'),
  userIsAuthenticated: userIsAuthenticated(state),
  setPaymentMethodStatus: get(state, 'openTender.status.setPaymentMethod')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      validateCurrentCart,
      bindCustomerToOrder,
      setDrawer,
      resetDrawer,
      fetchPayments
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
