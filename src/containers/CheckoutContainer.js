import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEqual from 'utils/isEqual';
import {
  validateCurrentCart,
  validateCurrentOrder,
  bindCustomerToOrder,
  setPaymentMethod,
  fetchPayments,
  paymentsAsArray,
  submitOrder,
  fetchAllCustomerOrders,
  createNewOrder,
  authenticateUser,
  unauthenticateUser,
  Constants
} from 'brandibble-redux';
import { handleCartValidationErrors } from 'state/actions/orderActions';
import {
  currentLocation,
  userIsAuthenticated,
  orderableDatesAndTimes,
  orderTotalsData,
  canSubmitOrder,
  currentPaymentMethod,
  orderValidations,
  promoCodeErrors,
  authenticationErrors
} from 'state/selectors';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';

import { FULFILLED, PENDING } from 'constants/Status';
import get from 'utils/get';
import getRoutes, { RouteProperties } from 'utils/getRoutes';

class CheckoutContainer extends ContainerBase {
  view = import('views/CheckoutView');

  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);
    const { openTenderRef, history, customerId } = this.props;
    const includeItemDetails = true;

    if (
      get(prevProps, 'submitOrderStatus') === PENDING &&
      get(this, 'props.submitOrderStatus') === FULFILLED
    ) {
      const basename = getRoutes(RouteProperties.BASENAME).ORDER_SUMMARY;
      const recentlySubmittedOrder = get(this, 'props.recentOrderSubmission');
      const orderId = get(recentlySubmittedOrder, 'orders_id');

      if (!get(recentlySubmittedOrder, 'customer.is_guest', true)) {
        this.props.actions.fetchAllCustomerOrders(
          openTenderRef,
          customerId,
          includeItemDetails
        );
      }

      this.createNewOrder();

      return history.push(`${basename}/${orderId}`);
    }

    if (
      this.shouldRevalidateOrder(prevProps) ||
      (get(prevProps, 'bindCustomerToOrderStatus') === PENDING &&
        get(this, 'props.bindCustomerToOrderStatus') === FULFILLED)
    ) {
      const { actions, openTenderRef } = this.props;
      return actions.validateCurrentOrder(openTenderRef, { apiVersion: 'v2' });
    }
  }

  createNewOrder = () => {
    const ref = get(this, 'props.openTenderRef');
    const locationId = get(this, 'props.currentLocation.location_id');

    return this.props.actions.createNewOrder(
      ref,
      locationId,
      Constants.ServiceTypes.PICKUP,
      'credit'
    );
  };

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
    ) {
      return Promise.resolve();
    }

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
      actions.validateCurrentCart(
        openTenderRef,
        null,
        errors => actions.handleCartValidationErrors(errors),
        { apiVersion: 'v2' }
      ),
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
    authenticateUserStatus: get(state, 'openTender.status.authenticateUser'),
    orderableDatesAndTimes: orderableDatesAndTimes(state),
    canSubmitOrder: canSubmitOrder(state),
    recentOrderSubmission: get(
      state,
      'openTender.data.customerOrders.recentSubmission'
    ),
    bindCustomerToOrderStatus: get(
      state,
      'openTender.status.bindCustomerToOrder'
    ),
    setPaymentMethodStatus: get(state, 'openTender.status.setPaymentMethod'),
    setPromoCodeStatus: get(state, 'openTender.status.setPromoCode'),
    submitOrderStatus: get(state, 'openTender.status.submitOrder'),
    customerId: get(state, 'openTender.user.attributes.customer_id'),
    orderValidations: orderValidations(state),
    promoCodeErrors: promoCodeErrors(state),
    authenticationErrors: authenticationErrors(state)
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      validateCurrentCart,
      validateCurrentOrder,
      bindCustomerToOrder,
      setPaymentMethod,
      fetchPayments,
      submitOrder,
      fetchAllCustomerOrders,
      createNewOrder,
      authenticateUser,
      unauthenticateUser,
      createSystemNotification,
      handleCartValidationErrors
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
