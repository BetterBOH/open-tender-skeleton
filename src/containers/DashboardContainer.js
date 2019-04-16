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
import { resetDrawer } from 'state/actions/ui/drawerActions';

import get from 'utils/get';

class DashboardContainer extends ContainerBase {
  static defaultRewards = [];

  view = import('views/DashboardView');

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
  userIsAuthenticated: userIsAuthenticated(state),
  accountDetails: accountDetails(state),
  customer: get(state, 'openTender.user.attributes'),
  pastOrders: get(state, 'openTender.data.customerOrders.past.data'),
  rewards: get(
    state,
    'openTender.user.loyalties.loyalties',
    DashboardContainer.defaultRewards
  )
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      unauthenticateUser,
      fetchFavorites,
      resetDrawer,
      fetchPastCustomerOrders,
      fetchPayments,
      attemptReorder,
      createSystemNotification
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
