import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

import { isValidEmail, isValidPassword } from 'utils/validation';

class AuthResetPassword extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      resetUserPassword: PropTypes.func,
      finishResetUserPassword: PropTypes.func
    }),
    token: PropTypes.string,
    attemptedEmail: PropTypes.string
  };

  static defaultProps = {
    actions: {
      resetUserPassword: f => f,
      finishResetUserPassword: f => f
    },
    token: '',
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
    const { actions, openTenderRef, localesContext } = this.props;

    if (!isValidEmail(this.state.email)) {
      return this.setState({
        error: localesContext.Language.t('auth.reset.errors.emailIsInvalid')
      });
    }

    return actions.resetUserPassword(openTenderRef, {
      email: this.state.email,
      return_url: `${window.location.origin}/auth/reset`
    });
  };

  handleSubmit = () => {
    const { actions, openTenderRef, token, localesContext } = this.props;
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      return this.setState({
        error: localesContext.Language.t('auth.reset.errors.passwordMismatch')
      });
    }

    if (!isValidPassword(password)) {
      return this.setState({
        error: localesContext.Language.t('auth.reset.errors.passwordIsInvalid')
      });
    }

    return actions.finishResetUserPassword(openTenderRef, token, { password });
  };

  render() {
    return RegistryLoader(
      {
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        error: this.state.error,
        tokenIsPresent: !!this.props.token,
        handleFieldChange: this.handleFieldChange,
        handleSubmit: this.handleSubmit,
        handleSendLink: this.handleSendLink,
        localesContext: this.props.localesContext
      },
      'components.AuthResetPassword',
      () => import('./presentation')
    );
  }
}

export default withLocales(AuthResetPassword);
