import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Status, validateUser } from 'brandibble-redux';
import { userIsAuthenticated } from 'state/selectors';

import get from 'utils/get';

class AuthContainer extends ContainerBase {
  view = import('views/AuthView');

  componentDidUpdate(prevProps) {
    if (
      prevProps.validateUserEmailStatus === Status.PENDING &&
      this.props.validateUserEmailStatus === Status.FULFILLED
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
  validateUserEmailStatus: get(state, 'openTender.status.validateUser')
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
