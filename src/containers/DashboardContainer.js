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
import { FULFILLED, PENDING } from 'constants/Status';

class DashboardContainer extends ContainerBase {
  static defaultRewards = [];
  model = () => {
    const promises = [];
    if (this.props.userIsAuthenticated) {
      promises.push(
        this.props.actions.fetchFavorites(this.props.openTenderRef)
      );
      promises.push(this.props.actions.fetchPayments(this.props.openTenderRef));
    }

    return promises;
  };
  view = import('views/DashboardView');

  componentDidUpdate(prevProps) {
    const didSetPaymentMethod =
      prevProps.setPaymentMethodStatus === PENDING &&
      this.props.setPaymentMethodStatus === FULFILLED;

    if (didSetPaymentMethod) {
      return this.props.actions.resetDrawer();
    }
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsAuthenticated: userIsAuthenticated(state),
  accountDetails: accountDetails(state),
  rewards: get(
    state,
    'openTender.user.loyalties.loyalties',
    DashboardContainer.defaultRewards
  ),
  setPaymentMethodStatus: get(state, 'openTender.status.setPaymentMethod')
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
