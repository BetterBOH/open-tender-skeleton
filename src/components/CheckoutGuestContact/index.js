import { PureComponent } from 'react';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';
import isEqual from 'utils/isEqual';
import { validateInput } from 'utils/formUtils';
import { ServerErrorCodes } from 'constants/OpenTender';
import matchServerErrorCodes from 'utils/matchServerErrorCodes';

import { INVALID_CUSTOMER_ATTRIBUTES_POINTER } from 'constants/OpenTender';
import InputTypes from 'constants/InputTypes';
import FlashVariants from 'constants/FlashVariants';

class CheckoutGuestContact extends PureComponent {
  constructor(props) {
    super(...arguments);

    this.state = {
      values: {
        [InputTypes.FIRST_NAME]: get(props, 'customer.first_name') || '',
        [InputTypes.LAST_NAME]: get(props, 'customer.last_name') || '',
        [InputTypes.EMAIL]: get(props, 'customer.email') || '',
        [InputTypes.PHONE]: get(props, 'customer.phone') || '',
        [InputTypes.PASSWORD]: get(props, 'customer.password') || ''
      },
      errors: {
        [InputTypes.FIRST_NAME]: [],
        [InputTypes.LAST_NAME]: [],
        [InputTypes.EMAIL]: [],
        [InputTypes.PHONE]: [],
        [InputTypes.PASSWORD]: []
      },
      fieldBeingEdited: null,
      showSignIn: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      bindCustomerToOrder,
      orderRef,
      createSystemNotification,
      localesContext
    } = this.props;

    const editedField = get(prevState, 'fieldBeingEdited');

    if (
      !!editedField &&
      !this.state.fieldBeingEdited &&
      !get(this, `state.errors[${editedField}].length`)
    ) {
      return bindCustomerToOrder(orderRef, this.state.values);
    }

    if (
      !isEqual(get(prevProps, 'serverErrors'), get(this, 'props.serverErrors'))
    ) {
      const guestEmailIsDuplicate = get(this, 'props.serverErrors', []).some(
        error =>
          get(error, 'source.pointer') ===
            INVALID_CUSTOMER_ATTRIBUTES_POINTER &&
          get(error, 'code') === ServerErrorCodes.DUPLICATE_EMAIL
      );

      if (guestEmailIsDuplicate && !this.state.showSignIn) {
        createSystemNotification({
          message: localesContext.Language.t(
            'systemNotification.validateOrder.errors.duplicateEmail'
          ),
          variant: FlashVariants.WARNING
        });

        return this.setState(prevState => ({
          showSignIn: !prevState.showSignIn
        }));
      }
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

  serverErrorsFromCustomer = () => {
    const { serverErrors } = this.props;

    return serverErrors.filter(
      error =>
        get(error, 'source.pointer') === INVALID_CUSTOMER_ATTRIBUTES_POINTER
    );
  };

  combineClientErrorsWithServerErrors = (serverErrors, clientErrors) => {
    if (!serverErrors.length) return clientErrors;

    const inputTypes = [
      InputTypes.FIRST_NAME,
      InputTypes.LAST_NAME,
      InputTypes.EMAIL,
      InputTypes.PHONE
    ];

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

  handleSignIn = () => {
    const { authenticateUser, openTenderRef, localesContext } = this.props;

    if (!this.state.values[InputTypes.PASSWORD]) {
      return this.setState({
        errors: {
          ...this.state.errors,
          [InputTypes.PASSWORD]: [
            localesContext.Language.t('checkout.contact.errors.password')
          ]
        }
      });
    }

    return authenticateUser(openTenderRef, {
      [InputTypes.EMAIL]: this.state.values[InputTypes.EMAIL],
      [InputTypes.PASSWORD]: this.state.values[InputTypes.PASSWORD]
    });
  };

  render() {
    const combinedErrors = this.combineClientErrorsWithServerErrors(
      this.serverErrorsFromCustomer(),
      this.state.errors
    );
    const { authenticateUserStatus } = this.props;

    return RegistryLoader(
      {
        values: this.state.values,
        errors: combinedErrors,
        handleOnFocus: this.handleOnFocus,
        handleFieldChange: this.handleFieldChange,
        handleOnBlur: this.handleOnBlur,
        handleSignIn: this.handleSignIn,
        showSignIn: this.state.showSignIn,
        authenticateUserStatus
      },
      'components.CheckoutGuestContact',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(CheckoutGuestContact);
