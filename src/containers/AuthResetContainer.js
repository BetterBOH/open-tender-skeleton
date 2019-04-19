import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import { resetUserPassword, finishResetUserPassword } from 'brandibble-redux';
import { userIsAuthenticated, parsedResetToken } from 'state/selectors';

import get from 'utils/get';

class AuthResetContainer extends ContainerBase {
  view = import('views/AuthResetView');
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsAuthenticated: userIsAuthenticated(state),
  attemptedEmail: get(state, 'openTender.user.validations.attempted_email'),
  token: parsedResetToken(state)
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
