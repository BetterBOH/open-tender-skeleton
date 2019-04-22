import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  validateCurrentCart,
  validateCurrentOrder,
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

import { FULFILLED, PENDING } from 'constants/Status';
import get from 'utils/get';
import getRoutes, { RouteProperties } from 'utils/getRoutes';

class CheckoutContainer extends ContainerBase {
  view = import('views/CheckoutView');

  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);
    const { history } = this.props;

    if (
      get(prevProps, 'submitOrderStatus') === PENDING &&
      get(this, 'props.submitOrderStatus') === FULFILLED
    ) {
      const basename = getRoutes(RouteProperties.BASENAME).ORDER_SUMMARY;
      const orderId = get(this, 'props.recentOrderSubmissionId');

      return history.push(`${basename}/${orderId}`);
    }
  }

  model = () => {
    const {
      actions,
      openTenderRef,
      userIsAuthenticated,
      orderRef,
      currentCustomer
    } = this.props;
    const promises = [actions.validateCurrentCart(openTenderRef)];

    if (userIsAuthenticated) {
      const customerAttributes = get(currentCustomer, 'attributes');

      promises.push(
        actions.bindCustomerToOrder(orderRef, customerAttributes),
        actions.fetchPayments(openTenderRef)
      );
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
      validateCurrentOrder,
      bindCustomerToOrder,
      setDrawer,
      resetDrawer,
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
