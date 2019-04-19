import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';
import FlashVariants from 'constants/FlashVariants';
import parseTokenParam from 'utils/parseTokenParam';

import { isValidEmail, isValidPassword } from 'utils/validation';

class AuthResetPassword extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      resetUserPassword: PropTypes.func,
      finishResetUserPassword: PropTypes.func
    }),
    attemptedEmail: PropTypes.string
  };

  static defaultProps = {
    actions: {
      resetUserPassword: f => f,
      finishResetUserPassword: f => f
    },
    attemptedEmail: ''
  };

  constructor(props) {
    super(...arguments);

    this.token = parseTokenParam();

    this.state = {
      email: props.attemptedEmail,
      password: '',
      confirmPassword: '',
      errors: null,
      sentLink: false
    };
  }

  handleFieldChange = (field, value) => {
    this.setState({
      [field]: value,
      errors: null
    });
  };

  handleSendLink = () => {
    const { actions, openTenderRef, localesContext } = this.props;

    if (!isValidEmail(this.state.email)) {
      return this.setState({
        errors: {
          ...this.state.errors,
          email: [localesContext.Language.t('auth.reset.errors.emailIsInvalid')]
        }
      });
    }

    actions.createSystemNotification({
      message: localesContext.Language.t('auth.reset.sent'),
      variant: FlashVariants.MESSAGE
    });

    return actions.resetUserPassword(openTenderRef, {
      email: this.state.email,
      return_url: `${window.location.origin}/auth/reset`
    });
  };

  handleSubmit = () => {
    const { actions, openTenderRef, localesContext } = this.props;
    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      return this.setState({
        errors: {
          ...this.state.errors,
          confirm: [
            localesContext.Language.t('auth.reset.errors.passwordMismatch')
          ]
        }
      });
    }

    if (!isValidPassword(password)) {
      return this.setState({
        errors: {
          ...this.state.errors,
          confirm: [
            localesContext.Language.t('auth.reset.errors.passwordIsInvalid')
          ]
        }
      });
    }

    return actions.finishResetUserPassword(openTenderRef, this.token, {
      password
    });
  };

  render() {
    return RegistryLoader(
      {
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        errors: this.state.errors,
        tokenIsPresent: !!this.token,
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
