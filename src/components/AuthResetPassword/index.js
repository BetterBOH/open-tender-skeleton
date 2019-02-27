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
      password: '',
      confirmPassword: '',
      error: null
    };
  }

  handleFieldChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSendLink = () => {
    const { actions, openTenderRef, Language } = this.props;

    if (!isValidEmail(this.state.email)) {
      return this.setState({
        error: Language.t('auth.reset.errors.emailIsInvalid')
      });
    }

    return actions.resetUserPassword(openTenderRef, {
      email: this.state.email,
      return_url: `${window.location.origin}/auth/reset`
    });
  };

  handleSubmit = () => {
    const { actions, openTenderRef, token, Language } = this.props;
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      return this.setState({
        error: Language.t('auth.reset.errors.passwordMismatch')
      });
    }

    if (password.length < 6) {
      return this.setState({
        error: Language.t('auth.reset.errors.passwordIsInvalid')
      });
    }

    return actions.finishResetUserPassword(openTenderRef, token, { password });
  };

  render() {
    return RegistryLoader(
      {
        ...this.state,
        tokenIsPresent: !!this.props.token,
        handleFieldChange: this.handleFieldChange,
        handleSubmit: this.handleSubmit,
        handleSendLink: this.handleSendLink
      },
      'components.AuthResetPassword',
      () => import('./presentation')
    );
  }
}

export default withLocales(AuthResetPassword);
