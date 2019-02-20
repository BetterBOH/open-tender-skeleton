import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { validateUser } from 'brandibble-redux';
import { FULFILLED, PENDING } from 'constants/Status';
import { userIsAuthenticated } from 'state/selectors';

import get from 'utils/get';

class AuthContainer extends ContainerBase {
  view = import('views/AuthView');

  componentDidUpdate(prevProps) {
    if (
      prevProps.validateUserEmail === PENDING &&
      this.props.validateUserEmail === FULFILLED
    ) {
      if (this.props.userIsCustomer) {
        this.props.history.push('/auth/login');
      } else {
        this.props.history.push('/auth/signup');
      }
    }
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsCustomer: get(
    state,
    'openTender.user.validations.is_brandibble_customer'
  ),
  userIsAuthenticated: userIsAuthenticated(state),
  validateUserEmail: get(state, 'openTender.status.validateUser')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      validateUser
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
