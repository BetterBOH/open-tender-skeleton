import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { resetUserPassword, finishResetUserPassword } from 'brandibble-redux';
import { userIsAuthenticated } from 'state/selectors';

import get from 'utils/get';

class AuthResetContainer extends ContainerBase {
  view = import('views/AuthResetView');
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsAuthenticated: userIsAuthenticated(state),
  attemptedEmail: get(state, 'openTender.user.validations.attempted_email')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetUserPassword,
      finishResetUserPassword
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthResetContainer);
