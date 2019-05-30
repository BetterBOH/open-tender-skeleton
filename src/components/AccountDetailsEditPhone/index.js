import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import { isValidPhoneNumber } from 'utils/validation';
import get from 'utils/get';
import InputTypes from 'constants/InputTypes';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';

class AccountDetailsEditPhone extends PureComponent {
  static propTypes = {
    customerAttributes: PropTypes.shape({
      phone: PropTypes.string
    }),
    openTenderRef: OpenTenderRefModel.propTypes,
    updateUser: PropTypes.func,
    updateUserStatus: PropTypes.string,
    onClose: PropTypes.func
  };

  static defaultProps = {
    customerAttributes: null,
    openTenderRef: OpenTenderRefModel.defaultProps,
    updateUser: f => f,
    updateUserStatus: Status.IDLE,
    onClose: f => f
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      [InputTypes.PHONE]: get(props, 'customerAttributes.phone', '')
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

  handleChange = phone => {
    return this.setState(prevState => ({
      ...prevState,
      phone,
      errors: null
    }));
  };

  handleSubmit = () => {
    const Language = get(this, 'props.localesContext.Language');

    if (!isValidPhoneNumber(this.state[InputTypes.PHONE])) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          [InputTypes.PHONE]: Language.t('dashboard.account.errors.phone')
        }
      }));
    }

    const customerId = get(this, 'props.customerAttributes.id');
    const openTenderRef = get(this, 'props.openTenderRef');

    return this.props.updateUser(openTenderRef, customerId, {
      [InputTypes.PHONE]: this.state[InputTypes.PHONE]
    });
  };

  render() {
    const { updateUserStatus, onClose } = this.props;

    return RegistryLoader(
      {
        customerAttributes: {
          [InputTypes.PHONE]: this.state[InputTypes.PHONE]
        },
        errors: this.state.errors,
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
