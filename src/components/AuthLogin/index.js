import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

import { isValidEmail } from 'utils/validation';

class AuthLogin extends PureComponent {
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
        error: Language.t('auth.login.errors.emailIsInvalid')
      });
    }

    if (!this.state.password) {
      return this.setState({
        error: Language.t('auth.login.errors.passwordIsInvalid')
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
      'components.AuthLogin',
      () => import('./presentation')
    );
  }
}

export default withLocales(AuthLogin);
