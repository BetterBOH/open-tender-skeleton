import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Status,
  unauthenticateUser,
  resetApplication,
  fetchFavorites,
  fetchAllCustomerOrders,
  fetchPayments,
  setDefaultPayment,
  attemptReorder,
  updateUser,
  addAllergens,
  removeAllergens,
  fetchAllergens
} from 'brandibble-redux';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import { userIsAuthenticated, accountDetails } from 'state/selectors';
import { setDrawer, resetDrawer } from 'state/actions/ui/drawerActions';

import getRoutes from 'utils/getRoutes';
import get from 'utils/get';

class DashboardContainer extends ContainerBase {
  static defaultRewards = [];
  view = import('views/DashboardView');

  componentDidUpdate(prevProps) {
    const { actions, openTenderRef, history } = this.props;

    if (
      get(prevProps, 'unauthenticateUserStatus') === Status.PENDING &&
      get(this, 'props.unauthenticateUserStatus') === Status.FULFILLED
    ) {
      actions.resetApplication(openTenderRef);

      return history.push(getRoutes().WELCOME);
    }

    if (
      get(prevProps, 'attemptReorderStatus') === Status.PENDING &&
      get(this, 'props.attemptReorderStatus') === Status.FULFILLED
    ) {
      return history.push(getRoutes().CHECKOUT);
    }

    /**
     * When a user adds a payment method and only has one payment method,
     * we set it as default.
     * */

    if (
      get(prevProps, 'createPaymentStatus') === Status.PENDING &&
      get(this, 'props.createPaymentStatus') === Status.FULFILLED
    ) {
      return actions.fetchPayments(openTenderRef).then(res => {
        const paymentMethods = get(res, 'value', []);

        if (paymentMethods.length === 1) {
          return actions.setDefaultPayment(
            openTenderRef,
            paymentMethods[0].customer_card_id
          );
        }
      });
    }
  }

  model = () => {
    const {
      actions,
      customer,
      userIsAuthenticated,
      openTenderRef
    } = this.props;
    const promises = [];

    if (userIsAuthenticated) {
      promises.push(
        actions.fetchFavorites(openTenderRef),
        actions.fetchAllCustomerOrders(
          openTenderRef,
          customer.customer_id,
          true
        ),
        actions.fetchAllergens(openTenderRef),
        actions.fetchPayments(openTenderRef)
      );
    }

    return Promise.all(promises);
  };
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  userIsAuthenticated: userIsAuthenticated(state),
  accountDetails: accountDetails(state),
  customer: get(state, 'openTender.user.attributes'),
  allOrders: get(state, 'openTender.data.customerOrders.all.data'),
  rewards: get(
    state,
    'openTender.user.loyalties.loyalties',
    DashboardContainer.defaultRewards
  ),
  unauthenticateUserStatus: get(state, 'openTender.status.unauthenticateUser'),
  createPaymentStatus: get(state, 'openTender.status.createPayment'),
  attemptReorderStatus: get(state, 'openTender.status.attemptReorder'),
  updateUserStatus: get(state, 'openTender.status.updateUser'),
  updateUserErrors: get(state, 'openTender.error.updateUser'),
  allergens: get(state, 'openTender.data.allergens.allergensById')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      unauthenticateUser,
      resetApplication,
      fetchFavorites,
      setDrawer,
      resetDrawer,
      fetchAllCustomerOrders,
      fetchPayments,
      setDefaultPayment,
      createSystemNotification,
      attemptReorder,
      updateUser,
      fetchAllergens,
      addAllergens,
      removeAllergens
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
