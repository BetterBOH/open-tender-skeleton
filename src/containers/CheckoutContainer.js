import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import {
  validateCurrentCart,
  bindCustomerToOrder,
  fetchPayments,
  submitOrder
} from 'brandibble-redux';
import {
  currentLocation,
  userIsAuthenticated,
  orderableDatesAndTimes,
  orderTotalsData,
  canSubmitOrder
} from 'state/selectors';

import { setDrawer, resetDrawer } from 'state/actions/ui/drawerActions';
import {
  createDropdown,
  closeDropdown
} from 'state/actions/ui/dropdownActions';

import { FULFILLED, PENDING } from 'constants/Status';
import get from 'utils/get';

class CheckoutContainer extends ContainerBase {
  view = import('views/CheckoutView');

  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);
    const { history } = this.props;

    if (
      get(prevProps, 'submitOrderStatus') === PENDING &&
      get(this, 'props.submitOrderStatus') === FULFILLED
    ) {
      const { basename } = get(getConfig(ConfigKeys.ROUTES), 'orderSummary');
      const orderId = get(this, 'props.recentOrderSubmissionId');

      return history.push(`${basename}/${orderId}`);
    }
  }

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
      const customerAttributes = get(this, 'props.currentCustomer.attributes');
      const bindCustomerToOrder = get(
        this,
        'props.actions.bindCustomerToOrder',
        f => f
      );
      promises.push(bindCustomerToOrder(orderRef, customerAttributes));
    }

    return Promise.all(promises);
  };
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  currentLocation: currentLocation(state),
  currentOrder: get(state, 'openTender.session.order.orderData'),
  currentCustomer: get(state, 'openTender.user'),
  creditCards: get(state, 'openTender.session.payments'),
  lineItemsData: get(state, 'openTender.session.order.lineItemsData'),
  orderTotalsData: orderTotalsData(state),
  userIsAuthenticated: userIsAuthenticated(state),
  orderableDatesAndTimes: orderableDatesAndTimes(state),
  canSubmitOrder: canSubmitOrder(state),
  recentOrderSubmissionId: get(
    state,
    'openTender.data.customerOrders.recentSubmission.orders_id'
  ),
  setPaymentMethodStatus: get(state, 'openTender.status.setPaymentMethod'),
  submitOrderStatus: get(state, 'openTender.status.submitOrder')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      validateCurrentCart,
      bindCustomerToOrder,
      setDrawer,
      resetDrawer,
      createDropdown,
      closeDropdown,
      fetchPayments,
      submitOrder
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
