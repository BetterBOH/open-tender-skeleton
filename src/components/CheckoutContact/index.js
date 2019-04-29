import { PureComponent } from 'react';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';

import { validateInput, validateForm } from 'utils/formUtils';
import { INVALID_CUSTOMER_ATTRIBUTES_POINTER } from 'constants/OpenTender';
import { InputTypes } from 'constants/Forms';
const { FIRST_NAME, LAST_NAME, EMAIL, PHONE } = InputTypes;

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
        [FIRST_NAME]: [],
        [LAST_NAME]: [],
        [EMAIL]: [],
        [PHONE]: []
      },
      formIsValid: false
    };
  }

  componentDidUpdate(prevProps) {
    const { serverErrors, bindCustomerToOrder, orderRef } = this.props;

    const serverErrorsAreFromCustomerAttributes = serverErrors.some(
      error =>
        !!error.source &&
        get(error, 'source.pointer') === INVALID_CUSTOMER_ATTRIBUTES_POINTER
    );

    if (
      serverErrors !== get(prevProps, 'serverErrors') &&
      !serverErrorsAreFromCustomerAttributes &&
      this.state.formIsValid
    ) {
      return bindCustomerToOrder(orderRef, this.state.values);
    }
  }

  handleFieldChange = (field, value) => {
    this.setState(prevState => ({
      values: { ...prevState.values, [field]: value }
    }));
  };

  handleKeyUp = field => {
    const { values, errors } = this.state;
    const { localesContext } = this.props;

    validateInput(
      field,
      values,
      errors,
      get(localesContext, 'Language'),
      state => {
        this.setState(state);
        this.checkFormIsValid(state);
      }
    );
  };

  checkFormIsValid = nextState => {
    const formIsValid = validateForm(nextState.values, nextState.errors);

    if (formIsValid) {
      return this.setState({ formIsValid: true });
    }

    this.setState({ formIsValid: false });
  };

  handleOnBlur = () => {
    const { bindCustomerToOrder, orderRef } = this.props;

    if (this.state.formIsValid) {
      return bindCustomerToOrder(orderRef, this.state.values);
    }
  };

  handleServerErrors = (serverErrors, clientErrors) => {
    const serverErrorsFromCustomer = serverErrors.filter(
      error =>
        !!error.source &&
        get(error, 'source.pointer') === INVALID_CUSTOMER_ATTRIBUTES_POINTER
    );

    if (!serverErrorsFromCustomer.length) return clientErrors;

    const inputTypes = [FIRST_NAME, LAST_NAME, EMAIL, PHONE];

    return serverErrorsFromCustomer.reduce((clientErrors, error) => {
      inputTypes.forEach(inputType => {
        if (error.code.includes(inputType)) {
          clientErrors = {
            ...clientErrors,
            [inputType]: [...clientErrors[inputType], get(error, 'title', '')]
          };
        }
      });

      return clientErrors;
    }, clientErrors);
  };

  render() {
    const combinedErrors = this.handleServerErrors(
      this.props.serverErrors,
      this.state.errors
    );

    return RegistryLoader(
      {
        values: this.state.values,
        errors: combinedErrors,
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
