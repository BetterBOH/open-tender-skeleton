import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import {
  resetUserPassword,
  finishResetUserPassword,
  Status
} from 'brandibble-redux';
import { userIsAuthenticated } from 'state/selectors';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';

import get from 'utils/get';

class AuthResetContainer extends ContainerBase {
  view = import('views/AuthResetView');

  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);
    const { history } = this.props;

    if (
      get(prevProps, 'finishResetUserPasswordStatus') === Status.PENDING &&
      get(this, 'props.finishResetUserPasswordStatus') === Status.FULFILLED
    ) {
      const loginPath = get(getConfig(ConfigKeys.ROUTES), 'login.path');

      return history.push(loginPath);
    }
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsAuthenticated: userIsAuthenticated(state),
  attemptedEmail: get(state, 'openTender.user.validations.attempted_email'),
  resetUserPasswordStatus: get(state, 'openTender.status.resetUserPassword'),
  finishResetUserPasswordStatus: get(
    state,
    'openTender.status.finishResetUserPassword'
  )
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetUserPassword,
      finishResetUserPassword,
      createSystemNotification
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthResetContainer);
