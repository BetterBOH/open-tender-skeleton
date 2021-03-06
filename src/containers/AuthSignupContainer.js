import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createAndAuthenticateUser } from 'brandibble-redux';
import { userIsAuthenticated } from 'state/selectors';

import get from 'utils/get';

class AuthSignupContainer extends ContainerBase {
  view = import('views/AuthSignupView');
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsAuthenticated: userIsAuthenticated(state),
  attemptedEmail: get(state, 'openTender.user.validations.attempted_email'),
  createAndAuthenticateUserStatus: get(
    state,
    'openTender.status.createAndAuthenticateUser'
  )
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      createAndAuthenticateUser
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthSignupContainer);
