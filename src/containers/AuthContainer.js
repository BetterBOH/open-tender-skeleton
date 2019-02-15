import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { validateUserEmail } from 'state/actions/authActions';
import { userIsAuthenticated } from 'state/selectors';

import get from 'utils/get';

class AuthContainer extends ContainerBase {
  view = import('views/AuthView');
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  attemptedCustomerEmail: get(state, 'auth.attemptedCustomerEmail'),
  userIsAuthenticated: userIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      validateUserEmail
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
