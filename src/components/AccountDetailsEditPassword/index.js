import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import { isValidPassword } from 'utils/validation';
import get from 'utils/get';
import InputTypes from 'constants/InputTypes';

class AccountDetailsEditPassword extends PureComponent {
  static propTypes = {
    customerAttributes: PropTypes.shape({
      id: PropTypes.number
    }),
    errors: PropTypes.arrayOf(PropTypes.string),
    onClose: PropTypes.func
  };

  static defaultProps = {
    customerAttributes: null,
    errors: null,
    onClose: f => f
  };

  state = {
    [InputTypes.PASSWORD]: '',
    confirmPassword: '',
    errors: {}
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.updateUserStatus === Status.PENDING &&
      this.props.updateUserStatus === Status.FULFILLED
    ) {
      return this.props.onClose();
    }
  }

  handleChangePassword = password => {
    return this.setState(prevState => ({
      ...prevState,
      [InputTypes.PASSWORD]: password,
      errors: null
    }));
  };

  handleChangeConfirmPassword = confirmPassword => {
    return this.setState(prevState => ({
      ...prevState,
      confirmPassword,
      errors: null
    }));
  };

  handleSubmit = () => {
    const Language = get(this, 'props.localesContext.Language');
    const { confirmPassword } = this.state;

    if (this.state[InputTypes.PASSWORD] !== confirmPassword) {
      return this.setState({
        errors: {
          confirmPassword: Language.t('auth.reset.errors.passwordMismatch')
        }
      });
    }

    if (!isValidPassword(this.state[InputTypes.PASSWORD])) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          [InputTypes.PASSWORD]: Language.t('dashboard.account.errors.password')
        }
      }));
    }

    const customerId = get(this, 'props.customerAttributes.id');
    const openTenderRef = get(this, 'props.openTenderRef');

    return this.props.updateUser(openTenderRef, customerId, {
      [InputTypes.PASSWORD]: this.state[InputTypes.PASSWORD]
    });
  };

  render() {
    const { updateUserStatus, onClose } = this.props;
    const { password, confirmPassword, errors } = this.state;

    return RegistryLoader(
      {
        password,
        confirmPassword,
        errors,
        updateUserStatus,
        handleCancel: onClose,
        handleChangePassword: this.handleChangePassword,
        handleChangeConfirmPassword: this.handleChangeConfirmPassword,
        handleSubmit: this.handleSubmit
      },
      'components.AccountDetailsEditPassword',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(AccountDetailsEditPassword);
