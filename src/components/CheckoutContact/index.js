import { PureComponent } from 'react';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';

import {
  handleServerError,
  handleValidationErrorMessage,
  validateInput,
  validateForm
} from 'utils/formUtils';
import { InputTypes, ErrorObjectKeys } from 'constants/Forms';

const { FIRST_NAME, LAST_NAME, EMAIL, PHONE } = InputTypes;
const { ERROR_MESSAGES, SHOW_ERROR_MESSAGES } = ErrorObjectKeys;

class CheckoutContact extends PureComponent {
  constructor(props) {
    super(...arguments);

    this.state = {
      values: {
        [FIRST_NAME]:
          get(props, 'customer.first_name') ||
          get(props, 'currentOrder.customer.first_name') ||
          '',
        [LAST_NAME]:
          get(props, 'customer.last_name') ||
          get(props, 'currentOrder.customer.last_name') ||
          '',
        [EMAIL]:
          get(props, 'customer.email') ||
          get(props, 'currentOrder.customer.email') ||
          '',
        [PHONE]:
          get(props, 'customer.phone') ||
          get(props, 'currentOrder.customer.phone') ||
          ''
      },
      errors: {
        [FIRST_NAME]: {
          [ERROR_MESSAGES]: null,
          [SHOW_ERROR_MESSAGES]: false
        },
        [LAST_NAME]: {
          [ERROR_MESSAGES]: null,
          [SHOW_ERROR_MESSAGES]: false
        },
        [EMAIL]: {
          [ERROR_MESSAGES]: null,
          [SHOW_ERROR_MESSAGES]: false
        },
        [PHONE]: {
          [ERROR_MESSAGES]: null,
          [SHOW_ERROR_MESSAGES]: false
        }
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.orderValidations && this.props.orderValidations) {
      const { values, errors } = this.state;

      return handleServerError(
        this.props.orderValidations,
        values,
        errors,
        state => this.setState(state)
      );
    }
  }

  handleFieldChange = (field, value) => {
    this.setState(prevState => ({
      values: { ...prevState.values, [field]: value }
    }));
  };

  handleKeyUp = field => {
    validateInput(field, this.state.values, this.state.errors, state => {
      this.setState(state);
      this.checkFormIsValid(state);
    });
  };

  checkFormIsValid = nextState => {
    const formIsValid = validateForm(nextState.values, nextState.errors);

    if (formIsValid) {
      return this.setState({ formIsValid: true });
    }

    this.setState({ formIsValid: false });
  };

  handleOnBlur = field => {
    const { bindCustomerToOrder, orderRef } = this.props;
    const { values, errors, formIsValid } = this.state;
    handleValidationErrorMessage(field, values, errors, state =>
      this.setState(state)
    );

    if (formIsValid) {
      return bindCustomerToOrder(orderRef, this.state.values);
    }
  };

  render() {
    const { values, errors } = this.state;

    return RegistryLoader(
      {
        values,
        errors,
        handleFieldChange: this.handleFieldChange,
        handleOnBlur: this.handleOnBlur,
        handleKeyUp: this.handleKeyUp
      },
      'components.CheckoutContact',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(CheckoutContact);
