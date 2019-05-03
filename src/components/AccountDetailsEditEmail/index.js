import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import { isValidEmail } from 'utils/validation';
import get from 'utils/get';

class AccountDetailsEditName extends PureComponent {
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

  static InputTypes = { EMAIL: 'email' };

  constructor(props) {
    super(...arguments);

    this.state = {
      email: get(props, 'customerAttributes.email')
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.updateUserStatus === Status.PENDING &&
      this.props.updateUserStatus === Status.FULFILLED
    ) {
      return this.props.onClose();
    }

    return null;
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
    const { email } = this.state;

    if (!isValidEmail(email)) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          email: Language.t('dashboard.account.errors.email')
        }
      }));
    }

    const customerId = get(this, 'props.customerAttributes.id');
    const openTenderRef = get(this, 'props.openTenderRef');

    return this.props.updateUser(openTenderRef, customerId, {
      email
    });
  };

  render() {
    const { updateUserStatus, onClose } = this.props;
    const { email, errors } = this.state;

    return RegistryLoader(
      {
        customerAttributes: { email },
        errors,
        updateUserStatus,
        handleCancel: onClose,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      },
      'components.AccountDetailsEditName',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(AccountDetailsEditName);
