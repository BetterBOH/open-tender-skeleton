import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

import { isValidEmail } from 'utils/validation';

class AuthResetPassword extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      authenticateUser: PropTypes.func
    }),
    attemptedEmail: PropTypes.string
  };

  static defaultProps = {
    actions: {
      authenticateUser: f => f
    },
    attemptedEmail: ''
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      email: props.attemptedEmail,
      error: null
    };
  }

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleLinkSend = () => {
    const { actions, openTenderRef, Language } = this.props;

    if (!isValidEmail(this.state.email)) {
      return this.setState({
        error: Language.t('auth.reset.errors.emailIsInvalid')
      });
    }
  };

  handleSubmit = () => {
    const { actions, openTenderRef, Language } = this.props;

    if (!isValidEmail(this.state.email)) {
      return this.setState({
        error: Language.t('auth.reset.errors.emailIsInvalid')
      });
    }

    if (!this.state.password) {
      return this.setState({
        error: Language.t('auth.reset.errors.passwordIsInvalid')
      });
    }

    return actions.authenticateUser(openTenderRef, {
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    return RegistryLoader(
      {
        ...this.state,
        handleFieldChange: this.handleFieldChange,
        handleSubmit: this.handleSubmit
      },
      'components.AuthResetPassword',
      () => import('./presentation')
    );
  }
}

export default withLocales(AuthResetPassword);
