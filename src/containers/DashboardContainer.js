import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { unauthenticateUser, fetchFavorites } from 'brandibble-redux';
import { userIsAuthenticated, accountDetails } from 'state/selectors';

import get from 'utils/get';

class DashboardContainer extends ContainerBase {
  static defaultRewards = [];
  model = () => {
    return this.props.actions.fetchFavorites(this.props.openTenderRef);
  };
  view = import('views/DashboardView');
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsAuthenticated: userIsAuthenticated(state),
  accountDetails: accountDetails(state),
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
      fetchFavorites
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
