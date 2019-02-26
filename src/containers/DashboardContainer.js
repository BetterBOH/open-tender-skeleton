import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { unauthenticateUser } from 'brandibble-redux';
import { userIsAuthenticated } from 'state/selectors';

import get from 'utils/get';

class DashboardContainer extends ContainerBase {
  view = import('views/DashboardView');
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsAuthenticated: userIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      unauthenticateUser
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);