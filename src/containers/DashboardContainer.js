import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  unauthenticateUser,
  fetchFavorites,
  fetchPayments
} from 'brandibble-redux';
import { userIsAuthenticated, accountDetails } from 'state/selectors';
import { resetDrawer } from 'state/actions/ui/drawerActions';

import get from 'utils/get';

class DashboardContainer extends ContainerBase {
  static defaultRewards = [];

  view = import('views/DashboardView');

  model = () => {
    const promises = [];

    if (this.props.userIsAuthenticated) {
      promises.push(
        this.props.actions.fetchFavorites(this.props.openTenderRef)
      );
      promises.push(this.props.actions.fetchPayments(this.props.openTenderRef));
    }

    return Promise.all(promises);
  };
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsAuthenticated: userIsAuthenticated(state),
  accountDetails: accountDetails(state),
  customer: get(state, 'openTender.user.attributes'),
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
      fetchPayments
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
