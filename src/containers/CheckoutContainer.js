import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEqual from 'lodash/isEqual';
import {
  validateCurrentCart,
  validateCurrentOrder,
  bindCustomerToOrder,
  setPaymentMethod,
  fetchPayments,
  paymentsAsArray,
  submitOrder
} from 'brandibble-redux';
import {
  currentLocation,
  userIsAuthenticated,
  orderableDatesAndTimes,
  orderTotalsData,
  canSubmitOrder,
  currentPaymentMethod
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

    if (this.shouldRevalidateOrder(prevProps)) {
      const { actions, openTenderRef } = this.props;
      actions.validateCurrentOrder(openTenderRef, { apiVersion: 'v2' });
    }
  }

  shouldRevalidateOrder = prevProps => {
    return !isEqual(
      get(prevProps, 'currentOrder', {}),
      get(this, 'props.currentOrder', {})
    );
  };

  attemptSetPaymentMethod = () => {
    const {
      actions,
      orderRef,
      userIsAuthenticated,
      payments,
      currentOrder
    } = this.props;

    if (
      !userIsAuthenticated ||
      get(currentOrder, 'credit_card.customer_card_id') ||
      payments.length === 0
    )
      return Promise.resolve();

    const payment = (payments || []).find(p => p.is_default) || payments[0];
    return actions.setPaymentMethod(orderRef, 'credit', payment);
  };

  redirect = () => {
    const { currentOrder, history } = this.props;
    if (get(currentOrder, 'cart', []).length === 0) {
      return history.push(getRoutes().WELCOME);
    }
  };

  model = () => {
    const {
      actions,
      openTenderRef,
      userIsAuthenticated,
      orderRef,
      currentCustomer
    } = this.props;
    const promises = [
      actions.validateCurrentCart(openTenderRef),
      actions.validateCurrentOrder(openTenderRef, { apiVersion: 'v2' })
    ];

    if (userIsAuthenticated) {
      const customerAttributes = get(currentCustomer, 'attributes');

      promises.push(
        actions.bindCustomerToOrder(orderRef, customerAttributes),
        actions.fetchPayments(openTenderRef)
      );
    }

    return Promise.all(promises).then(() => {
      if (!userIsAuthenticated) return Promise.resolve();
      return Promise.all([this.attemptSetPaymentMethod()]);
    });
  };
}

const mapStateToProps = state => {
  return {
    openTenderRef: get(state, 'openTender.ref'),
    orderRef: get(state, 'openTender.session.order.ref'),
    currentLocation: currentLocation(state),
    currentOrder: get(state, 'openTender.session.order.orderData'),
    currentCustomer: get(state, 'openTender.user'),
    creditCards: get(state, 'openTender.session.payments'),
    activePayment: currentPaymentMethod(state),
    payments: paymentsAsArray(state.openTender),
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
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      validateCurrentCart,
      validateCurrentOrder,
      bindCustomerToOrder,
      setPaymentMethod,
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
