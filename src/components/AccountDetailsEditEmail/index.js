import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import { isValidEmail } from 'utils/validation';
import get from 'utils/get';
import matchServerErrorCodes from 'utils/matchServerErrorCodes';
import InputTypes from 'constants/InputTypes';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';

class AccountDetailsEditEmail extends PureComponent {
  static propTypes = {
    customerAttributes: PropTypes.shape({
      email: PropTypes.string
    }),
    openTenderRef: OpenTenderRefModel.propTypes,
    updateUser: PropTypes.func,
    updateUserStatus: PropTypes.string,
    updateUserErrors: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    onClose: PropTypes.func
  };

  static defaultProps = {
    customerAttributes: null,
    openTenderRef: OpenTenderRefModel.defaultProps,
    updateUser: f => f,
    updateUserStatus: Status.IDLE,
    updateUserErrors: null,
    onClose: f => f
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      [InputTypes.EMAIL]: get(props, 'customerAttributes.email', ''),
      errors: [],
      fieldBeingEdited: false
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

  handleOnFocus = () => {
    return this.setState({
      fieldBeingEdited: true,
      errors: []
    });
  };

  handleOnBlur = () => {
    return this.setState(prevState => ({
      ...prevState,
      fieldBeingEdited: false
    }));
  };

  handleChange = email => {
    return this.setState(prevState => ({
      ...prevState,
      email,
      fieldBeingEdited: true,
      errors: []
    }));
  };

  handleSubmit = () => {
    const Language = get(this, 'props.localesContext.Language');

    if (!isValidEmail(this.state[InputTypes.EMAIL])) {
      return this.setState(prevState => ({
        ...prevState,
        errors: [Language.t('dashboard.account.errors.email')]
      }));
    }

    const customerId = get(this, 'props.customerAttributes.id');
    const openTenderRef = get(this, 'props.openTenderRef');

    return this.props.updateUser(openTenderRef, customerId, {
      [InputTypes.EMAIL]: this.state[InputTypes.EMAIL]
    });
  };

  combineErrors = () => {
    if (!this.props.updateUserErrors) {
      if (!!get(this, 'state.errors.length')) return this.state.errors;

      return [];
    }

    let combinedErrors = [...this.state.errors];

    this.props.updateUserErrors.map(error => {
      const errorCode = get(error, 'code', '');
      const errorText =
        matchServerErrorCodes(
          errorCode,
          get(this, 'props.localesContext.Language')
        ) || get(error, 'title', '');

      if (!!errorText && !this.state.fieldBeingEdited) {
        combinedErrors.push(errorText);
      }
    });

    return combinedErrors;
  };

  render() {
    const { updateUserStatus, onClose } = this.props;

    return RegistryLoader(
      {
        customerAttributes: {
          [InputTypes.EMAIL]: this.state[InputTypes.EMAIL]
        },
        errors: this.combineErrors(),
        updateUserStatus,
        handleCancel: onClose,
        handleOnFocus: this.handleOnFocus,
        handleOnBlur: this.handleOnBlur,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      },
      'components.AccountDetailsEditEmail',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(AccountDetailsEditEmail);
