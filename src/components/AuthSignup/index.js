import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

import { isValidEmail, isValidPhoneNumber } from 'utils/validation';

class AuthSignup extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(...arguments);

    this.state = {
      email: props.attemptedEmail,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      error: null
    };
  }

  handleFieldChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSubmit = () => {
    const { actions, openTenderRef, Language } = this.props;

    if (!isValidEmail(this.state.email)) {
      return this.setState({
        error: Language.t('auth.signup.errors.invalidEmail')
      });
    }

    if (!this.state.firstName) {
      return this.setState({
        error: Language.t('auth.signup.errors.invalidFirstName')
      });
    }

    if (!this.state.lastName) {
      return this.setState({
        error: Language.t('auth.signup.errors.invalidLastName')
      });
    }

    if (this.state.phone && !isValidPhoneNumber(this.state.phone)) {
      return this.setState({
        error: Language.t('auth.signup.errors.invalidPhone')
      });
    }

    if (this.state.password && this.state.password.length < 6) {
      return this.setState({
        error: Language.t('auth.signup.errors.invalidPassword')
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
        ...this.props,
        ...this.state,
        handleFieldChange: this.handleFieldChange,
        handleSubmit: this.handleSubmit
      },
      'components.AuthSignup',
      () => import('./presentation')
    );
  }
}

export default withLocales(AuthSignup);
