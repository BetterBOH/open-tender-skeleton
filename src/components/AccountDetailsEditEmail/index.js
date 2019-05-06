import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import { isValidEmail } from 'utils/validation';
import get from 'utils/get';
import InputTypes from 'constants/InputTypes';

class AccountDetailsEditEmail extends PureComponent {
  static propTypes = {
    customerAttributes: PropTypes.shape({
      email: PropTypes.string
    }),
    errors: PropTypes.arrayOf(PropTypes.string),
    onClose: PropTypes.func
  };

  static defaultProps = {
    customerAttributes: null,
    errors: null,
    onClose: f => f
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      [InputTypes.EMAIL]: get(props, 'customerAttributes.email', '')
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.updateUserStatus === Status.PENDING &&
      this.props.updateUserStatus === Status.FULFILLED
    ) {
      return this.props.onClose();
    }
  }

  handleChange = email => {
    return this.setState(prevState => ({
      ...prevState,
      email,
      errors: null
    }));
  };

  handleSubmit = () => {
    const Language = get(this, 'props.localesContext.Language');

    if (!isValidEmail(this.state[InputTypes.EMAIL])) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          [InputTypes.EMAIL]: Language.t('dashboard.account.errors.email')
        }
      }));
    }

    const customerId = get(this, 'props.customerAttributes.id');
    const openTenderRef = get(this, 'props.openTenderRef');

    return this.props.updateUser(openTenderRef, customerId, {
      [InputTypes.EMAIL]: this.state[InputTypes.EMAIL]
    });
  };

  render() {
    const { updateUserStatus, onClose } = this.props;

    return RegistryLoader(
      {
        customerAttributes: {
          [InputTypes.EMAIL]: this.state[InputTypes.EMAIL]
        },
        errors: this.state.errors,
        updateUserStatus,
        handleCancel: onClose,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      },
      'components.AccountDetailsEditEmail',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(AccountDetailsEditEmail);
