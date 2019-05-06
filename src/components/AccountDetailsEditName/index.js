import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';
import InputTypes from 'constants/InputTypes';

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

  constructor(props) {
    super(...arguments);

    this.state = {
      [InputTypes.FIRST_NAME]: get(props, 'customerAttributes.firstName'),
      [InputTypes.LAST_NAME]: get(props, 'customerAttributes.lastName')
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

    if (!this.state[InputTypes.FIRST_NAME]) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          [InputTypes.FIRST_NAME]: Language.t(
            'dashboard.account.errors.firstName'
          )
        }
      }));
    }

    if (!this.state[InputTypes.LAST_NAME]) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          [InputTypes.LAST_NAME]: Language.t(
            'dashboard.account.errors.lastName'
          )
        }
      }));
    }

    const customerId = get(this, 'props.customerAttributes.id');
    const openTenderRef = get(this, 'props.openTenderRef');

    return this.props.updateUser(openTenderRef, customerId, {
      [InputTypes.FIRST_NAME]: this.state[InputTypes.FIRST_NAME],
      [InputTypes.LAST_NAME]: this.state[InputTypes.LAST_NAME]
    });
  };

  render() {
    const { updateUserStatus, onClose } = this.props;

    return RegistryLoader(
      {
        customerAttributes: {
          [InputTypes.FIRST_NAME]: this.state[InputTypes.FIRST_NAME],
          [InputTypes.LAST_NAME]: this.state[InputTypes.LAST_NAME]
        },
        errors: this.state.errors,
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
