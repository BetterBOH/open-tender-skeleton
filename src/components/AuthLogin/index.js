import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

import { isValidEmail } from 'utils/validation';
import matchServerErrorCodes from 'utils/matchServerErrorCodes';

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
      errors: []
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

    if (!isValidEmail(this.state.email)) {
      return this.setState({
        errors: {
          ...this.state.errors,
          email: [localesContext.Language.t('auth.login.errors.emailIsInvalid')]
        }
      });
    }

    if (!this.state.password) {
      return this.setState({
        errors: {
          ...this.state.errors,
          password: [
            localesContext.Language.t('auth.login.errors.passwordIsInvalid')
          ]
        }
      });
    }

    return actions.authenticateUser(openTenderRef, {
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    const { email, password, errors } = this.state;
    const {
      serverErrors,
      localesContext: { Language }
    } = this.props;

    return RegistryLoader(
      {
        email,
        password,
        errors,
        serverErrors: serverErrors.map(error =>
          matchServerErrorCodes(error, Language)
        ),
        authenticateUserStatus: this.props.authenticateUserStatus,
        emailWasAttempted: !!this.props.attemptedEmail,
        handleFieldChange: this.handleFieldChange,
        handleSubmit: this.handleSubmit
      },
      'components.AuthLogin',
      () => import('./presentation')
    );
  }
}

export default withLocales(AuthLogin);
