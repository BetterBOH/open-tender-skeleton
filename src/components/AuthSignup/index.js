import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

import {
  isValidEmail,
  isValidPhoneNumber,
  isValidPassword
} from 'utils/validation';

class AuthSignup extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      createAndAuthenticateUser: PropTypes.func
    }),
    attemptedEmail: PropTypes.string
  };

  static defaultProps = {
    actions: {
      createAndAuthenticateUser: f => f
    },
    attemptedEmail: ''
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      email: props.attemptedEmail,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      errors: null
    };
  }

  handleFieldChange = (field, value) => {
    this.setState({
      [field]: value,
      errors: null
    });
  };

  handleSubmit = () => {
    const { actions, openTenderRef, localesContext } = this.props;
    const { Language } = localesContext;

    if (!isValidEmail(this.state.email)) {
      return this.setState({
        errors: {
          ...this.state.errors,
          email: [Language.t('auth.signup.errors.emailIsInvalid')]
        }
      });
    }

    if (!this.state.firstName) {
      return this.setState({
        errors: {
          ...this.state.errors,
          firstName: [Language.t('auth.signup.errors.firstNameIsInvalid')]
        }
      });
    }

    if (!this.state.lastName) {
      return this.setState({
        errors: {
          ...this.state.errors,
          lastName: [Language.t('auth.signup.errors.lastNameIsInvalid')]
        }
      });
    }

    if (!isValidPhoneNumber(this.state.phoneNumber)) {
      return this.setState({
        errors: {
          ...this.state.errors,
          phoneNumber: [Language.t('auth.signup.errors.phoneNumberIsInvalid')]
        }
      });
    }

    if (!isValidPassword(this.state.password)) {
      return this.setState({
        errors: {
          ...this.state.errors,
          password: [Language.t('auth.signup.errors.passwordIsInvalid')]
        }
      });
    }

    return actions.createAndAuthenticateUser(openTenderRef, {
      email: this.state.email,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      phone: this.state.phoneNumber,
      password: this.state.password
    });
  };

  render() {
    return RegistryLoader(
      {
        email: this.state.email,
        emailWasAttempted: !!this.props.attemptedEmail,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password,
        errors: this.state.errors,
        createAndAuthenticateUserStatus: this.props
          .createAndAuthenticateUserStatus,
        handleFieldChange: this.handleFieldChange,
        handleSubmit: this.handleSubmit
      },
      'components.AuthSignup',
      () => import('./presentation')
    );
  }
}

export default withLocales(AuthSignup);
