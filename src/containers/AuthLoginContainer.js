import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { authenticateUser } from 'brandibble-redux';
import { userIsAuthenticated, authenticationErrors } from 'state/selectors';

import get from 'utils/get';

class AuthLoginContainer extends ContainerBase {
  view = import('views/AuthLoginView');
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsAuthenticated: userIsAuthenticated(state),
  attemptedEmail: get(state, 'openTender.user.validations.attempted_email'),
  authenticateUserStatus: get(state, 'openTender.status.authenticateUser'),
  authenticationErrors: authenticationErrors(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      authenticateUser
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoginContainer);
