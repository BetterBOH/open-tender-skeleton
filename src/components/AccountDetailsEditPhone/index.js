import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';
import { isValidPhoneNumber } from 'utils/validation';

class AccountDetailsEditPhone extends PureComponent {
  static propTypes = {
    customerAttributes: PropTypes.shape({
      phone: PropTypes.string
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
      phone: get(props, 'customerAttributes.phone')
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

  handleChange = phone => {
    return this.setState(prevState => ({
      ...prevState,
      phone,
      errors: null
    }));
  };

  handleSubmit = () => {
    const Language = get(this, 'props.localesContext.Language');
    const { phone } = this.state;

    if (!isValidPhoneNumber(phone)) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          phone: Language.t('dashboard.account.errors.phone')
        }
      }));
    }

    const customerId = get(this, 'props.customerAttributes.id');
    const openTenderRef = get(this, 'props.openTenderRef');

    return this.props.updateUser(openTenderRef, customerId, {
      phone
    });
  };

  render() {
    const { updateUserStatus, onClose } = this.props;
    const { phone, errors } = this.state;

    return RegistryLoader(
      {
        customerAttributes: { phone },
        errors,
        updateUserStatus,
        handleCancel: onClose,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      },
      'components.AccountDetailsEditPhone',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(AccountDetailsEditPhone);
