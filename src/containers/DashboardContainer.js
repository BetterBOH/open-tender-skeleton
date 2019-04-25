import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  unauthenticateUser,
  fetchFavorites,
  fetchPastCustomerOrders,
  fetchPayments,
  attemptReorder
} from 'brandibble-redux';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import { userIsAuthenticated, accountDetails } from 'state/selectors';
import { setDrawer, resetDrawer } from 'state/actions/ui/drawerActions';
import { FULFILLED, PENDING } from 'constants/Status';

import getRoutes from 'utils/getRoutes';
import get from 'utils/get';

class DashboardContainer extends ContainerBase {
  static defaultRewards = [];
  view = import('views/DashboardView');

  componentDidUpdate(prevProps) {
    const { history } = this.props;

    if (
      get(prevProps, 'attemptReorderStatus') === PENDING &&
      get(this, 'props.attemptReorderStatus') === FULFILLED
    ) {
      history.push(getRoutes().CHECKOUT);
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
    const FETCH_PAST_ORDERS_LIMIT = 10;

    if (userIsAuthenticated) {
      promises.push(
        actions.fetchFavorites(openTenderRef),
        actions.fetchPastCustomerOrders(
          openTenderRef,
          customer.customer_id,
          FETCH_PAST_ORDERS_LIMIT,
          true
        )
      );
      promises.push(actions.fetchPayments(openTenderRef));
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
  pastOrders: get(state, 'openTender.data.customerOrders.past.data'),
  rewards: get(
    state,
    'openTender.user.loyalties.loyalties',
    DashboardContainer.defaultRewards
  ),
  attemptReorderStatus: get(state, 'openTender.status.attemptReorder')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      unauthenticateUser,
      fetchFavorites,
      setDrawer,
      resetDrawer,
      fetchPastCustomerOrders,
      fetchPayments,
      createSystemNotification,
      attemptReorder
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
