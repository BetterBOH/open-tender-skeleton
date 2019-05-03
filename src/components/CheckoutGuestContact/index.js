import { PureComponent } from 'react';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';

import { validateInput } from 'utils/formUtils';
import matchServerErrorCodes from 'utils/matchServerErrorCodes';
import { INVALID_CUSTOMER_ATTRIBUTES_POINTER } from 'constants/OpenTender';
import { InputTypes } from 'constants/Forms';
const { FIRST_NAME, LAST_NAME, EMAIL, PHONE } = InputTypes;

class CheckoutGuestContact extends PureComponent {
  constructor(props) {
    super(...arguments);

    this.state = {
      values: {
        [FIRST_NAME]: get(props, 'customer.first_name') || '',
        [LAST_NAME]: get(props, 'customer.last_name') || '',
        [EMAIL]: get(props, 'customer.email') || '',
        [PHONE]: get(props, 'customer.phone') || ''
      },
      errors: {
        [FIRST_NAME]: [],
        [LAST_NAME]: [],
        [EMAIL]: [],
        [PHONE]: []
      },
      fieldBeingEdited: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { bindCustomerToOrder, orderRef } = this.props;

    const editedField = get(prevState, 'fieldBeingEdited');

    if (
      !!editedField &&
      !this.state.fieldBeingEdited &&
      !get(this, `state.errors[${editedField}].length`)
    ) {
      return bindCustomerToOrder(orderRef, this.state.values);
    }
  }

  handleOnFocus = field => {
    this.setState(prevState => ({
      fieldBeingEdited: field,
      errors: { ...prevState.errors, [field]: [] }
    }));
  };

  handleFieldChange = (field, value) => {
    this.setState(prevState => ({
      values: { ...prevState.values, [field]: value }
    }));
  };

  handleOnBlur = field => {
    const { values, errors } = this.state;

    validateInput(
      field,
      values,
      errors,
      get(this, 'props.localesContext.Language'),
      errors =>
        this.setState(prevState => ({
          ...prevState,
          fieldBeingEdited: null,
          errors
        }))
    );
  };

  serverErrorsFromCustomer = serverErrors => {
    return serverErrors.filter(
      error =>
        get(error, 'source.pointer') === INVALID_CUSTOMER_ATTRIBUTES_POINTER
    );
  };

  combineClientErrorsWithServerErrors = (serverErrors, clientErrors) => {
    if (!serverErrors.length) return clientErrors;

    const inputTypes = [FIRST_NAME, LAST_NAME, EMAIL, PHONE];

    return serverErrors.reduce((clientErrors, error) => {
      const errorCode = get(error, 'code', '');
      const errorText =
        matchServerErrorCodes(
          errorCode,
          get(this, 'props.localesContext.Language')
        ) || get(error, 'title', '');

      inputTypes.forEach(inputType => {
        if (
          errorCode.includes(inputType) &&
          inputType !== this.state.fieldBeingEdited
        ) {
          clientErrors = {
            ...clientErrors,
            [inputType]: [...clientErrors[inputType], errorText]
          };
        }
      });

      return clientErrors;
    }, clientErrors);
  };

  render() {
    const combinedErrors = this.combineClientErrorsWithServerErrors(
      this.serverErrorsFromCustomer(this.props.serverErrors),
      this.state.errors
    );

    return RegistryLoader(
      {
        values: this.state.values,
        errors: combinedErrors,
        handleOnFocus: this.handleOnFocus,
        handleFieldChange: this.handleFieldChange,
        handleOnBlur: this.handleOnBlur
      },
      'components.CheckoutGuestContact',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(CheckoutGuestContact);