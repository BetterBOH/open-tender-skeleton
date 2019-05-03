import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';

class AccountDetailsEditName extends PureComponent {
  static propTypes = {
    customerAttributes: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    errors: PropTypes.arrayOf(PropTypes.string),
    onClose: PropTypes.func
  };

  static defaultProps = {
    customerAttributes: null,
    errors: null,
    onClose: f => f
  };

  static InputTypes = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName'
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      firstName: get(props, 'customerAttributes.firstName'),
      lastName: get(props, 'customerAttributes.lastName')
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

  handleChange = (field, value) => {
    return this.setState(prevState => ({
      ...prevState,
      [field]: value,
      errors: null
    }));
  };

  handleSubmit = () => {
    const Language = get(this, 'props.localesContext.Language');
    const { firstName, lastName } = this.state;

    if (!firstName) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          [AccountDetailsEditName.InputTypes.FIRST_NAME]: Language.t(
            'dashboard.account.errors.firstName'
          )
        }
      }));
    }

    if (!lastName) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          [AccountDetailsEditName.InputTypes.LAST_NAME]: Language.t(
            'dashboard.account.errors.lastName'
          )
        }
      }));
    }

    const customerId = get(this, 'props.customerAttributes.id');
    const openTenderRef = get(this, 'props.openTenderRef');

    return this.props.updateUser(openTenderRef, customerId, {
      first_name: firstName,
      last_name: lastName
    });
  };

  render() {
    const { updateUserStatus, onClose } = this.props;
    const { errors, firstName, lastName } = this.state;

    return RegistryLoader(
      {
        customerAttributes: { firstName, lastName },
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
