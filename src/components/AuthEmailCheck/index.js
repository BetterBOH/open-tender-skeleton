import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

import { isValidEmail } from 'utils/validation';

class AuthEmailCheck extends Component {
  state = {
    email: '',
    error: null
  };

  static propTypes = {
    actions: PropTypes.shape({
      validateUser: PropTypes.func
    }),
    openTenderRef: PropTypes.object
  };

  static defaultProps = {
    actions: {
      validateUser: f => f
    },
    openTenderRef: null
  };

  handleCheckEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleCheckEmailClick = () => {
    const { actions, openTenderRef, Language } = this.props;

    if (!isValidEmail(this.state.email))
      return this.setState({
        error: Language.t('auth.errors.emailIsInvalid')
      });

    return this.setState({ error: null }, () =>
      actions.validateUserEmail(openTenderRef, this.state.email)
    );
  };

  render() {
    return RegistryLoader(
      {
        ...this.props,
        error: this.state.error,
        handleCheckEmailChange: this.handleCheckEmailChange,
        handleCheckEmailClick: this.handleCheckEmailClick
      },
      'components.AuthEmailCheck',
      () => import('./presentation')
    );
  }
}

export default withLocales(AuthEmailCheck);
