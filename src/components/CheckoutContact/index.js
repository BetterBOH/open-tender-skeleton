import { PureComponent } from 'react';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';
import isEqual from 'utils/isEqual';

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

  componentDidUpdate(prevProps, prevState) {
    const { bindCustomerToOrder, orderRef } = this.props;

    if (isEqual(get(prevState, 'errors'), this.state.errors)) {
      this.setState({
        formIsValid: validateForm(this.state.values, this.state.errors)
      });
    }

    if (!get(prevState, 'formIsValid') && this.state.formIsValid) {
      return bindCustomerToOrder(orderRef, this.state.values);
    }
  }

  handleFieldChange = (field, value) => {
    this.setState(prevState => ({
      values: { ...prevState.values, [field]: value }
    }));
  };

  handleOnBlur = field => {
    const { values, errors } = this.state;
    const { localesContext } = this.props;

    validateInput(
      field,
      values,
      errors,
      get(localesContext, 'Language'),
      state => this.setState(state)
    );
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
        if (get(error, 'code', '').includes(inputType)) {
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
        handleOnBlur: this.handleOnBlur
      },
      'components.CheckoutContact',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(CheckoutContact);
