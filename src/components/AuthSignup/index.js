import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

import { isValidEmail } from 'utils/validation';

class AuthSignup extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
    error: null
  };

  handleFieldChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
      error
    } = this.state;

    return RegistryLoader(
      {
        ...this.props,
        email,
        firstName,
        lastName,
        password,
        phoneNumber,
        error,
        handleFieldChange: this.handleFieldChange
      },
      'components.AuthSignup',
      () => import('./presentation')
    );
  }
}

export default withLocales(AuthSignup);
