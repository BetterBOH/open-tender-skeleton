import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import { Status } from 'brandibble-redux';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import { isValidEmail } from 'utils/validation';

class AuthEmailCheck extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      validateUser: PropTypes.func
    }),
    openTenderRef: OpenTenderRefModel.propTypes,
    validateUserEmailStatus: PropTypes.string
  };

  static defaultProps = {
    actions: {
      validateUser: f => f
    },
    openTenderRef: OpenTenderRefModel.defaultProps,
    validateUserEmailStatus: Status.IDLE
  };

  state = {
    email: '',
    error: null
  };

  handleCheckEmailChange = value => {
    this.setState({ email: value });
  };

  handleCheckEmailClick = () => {
    const { actions, openTenderRef, localesContext } = this.props;

    if (!isValidEmail(this.state.email)) {
      return this.setState({
        error: localesContext.Language.t(
          'auth.emailCheck.errors.emailIsInvalid'
        )
      });
    }

    return this.setState({ error: null }, () =>
      actions.validateUser(openTenderRef, this.state.email)
    );
  };

  render() {
    return RegistryLoader(
      {
        email: this.state.email,
        error: this.state.error,
        validateUserEmailStatus: this.props.validateUserEmailStatus,
        handleCheckEmailChange: this.handleCheckEmailChange,
        handleCheckEmailClick: this.handleCheckEmailClick
      },
      'components.AuthEmailCheck',
      () => import('./presentation')
    );
  }
}

export default withLocales(AuthEmailCheck);
