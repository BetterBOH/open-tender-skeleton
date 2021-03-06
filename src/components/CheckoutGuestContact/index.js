import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';

import { Status } from 'brandibble-redux';
import get from 'utils/get';
import isEqual from 'utils/isEqual';
import { validateInput } from 'utils/formUtils';
import matchServerErrorCodes from 'utils/matchServerErrorCodes';

import { ServerErrorCodes } from 'constants/OpenTender';
import { INVALID_CUSTOMER_ATTRIBUTES_POINTER } from 'constants/OpenTender';
import InputTypes from 'constants/InputTypes';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import OrderModel from 'constants/Models/OrderModel';

class CheckoutGuestContact extends PureComponent {
  static propTypes = {
    // Guest customer has different shape than CustomerModel
    customer: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      password: PropTypes.string
    }),
    openTenderRef: OpenTenderRefModel.propTypes,
    orderRef: OrderModel.propTypes,
    bindCustomerToOrder: PropTypes.func,
    orderValidationErrors: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.oneOfType([
          PropTypes.objectOf(PropTypes.string),
          PropTypes.string,
          PropTypes.number
        ])
      )
    ),
    authenticateUser: PropTypes.func,
    authenticateUserStatus: PropTypes.string,
    authenticationErrors: PropTypes.arrayOf(PropTypes.string),
    createSystemNotification: PropTypes.func
  };

  static defaultProps = {
    customer: null,
    openTenderRef: OpenTenderRefModel.defaultProps,
    orderRef: OrderModel.defaultProps,
    bindCustomerToOrder: f => f,
    orderValidationErrors: [],
    authenticateUser: f => f,
    authenticateUserStatus: Status.IDLE,
    authenticationErrors: [],
    createSystemNotification: f => f
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      values: {
        [InputTypes.FIRST_NAME]: get(props, 'customer.first_name', ''),
        [InputTypes.LAST_NAME]: get(props, 'customer.last_name', ''),
        [InputTypes.EMAIL]: get(props, 'customer.email', ''),
        [InputTypes.PHONE]: get(props, 'customer.phone', ''),
        [InputTypes.PASSWORD]: ''
      },
      errors: {
        [InputTypes.FIRST_NAME]: [],
        [InputTypes.LAST_NAME]: [],
        [InputTypes.EMAIL]: [],
        [InputTypes.PHONE]: [],
        [InputTypes.PASSWORD]: []
      },
      fieldBeingEdited: null,
      showSignInForm: false
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
      !isEqual(
        get(prevProps, 'orderValidationErrors'),
        get(this, 'props.orderValidationErrors')
      )
    ) {
      const guestEmailIsDuplicate = get(
        this,
        'props.orderValidationErrors',
        []
      ).some(
        error =>
          get(error, 'source.pointer') ===
            INVALID_CUSTOMER_ATTRIBUTES_POINTER &&
          get(error, 'code') === ServerErrorCodes.ORDER_DUPLICATE_EMAIL
      );

      if (guestEmailIsDuplicate && !this.state.showSignInForm) {
        createSystemNotification({
          message: localesContext.Language.t(
            'systemNotification.validateOrder.errors.duplicateEmail'
          )
        });

        return this.setState({ showSignInForm: true });
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

  filteredServerErrors = () => {
    const { orderValidationErrors } = this.props;

    return orderValidationErrors.filter(
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

  toggleSignInForm = () => {
    this.setState(state => {
      return {
        showSignInForm: !state.showSignInForm
      };
    });
  };

  render() {
    const combinedErrors = this.combineClientErrorsWithServerErrors(
      this.filteredServerErrors(),
      this.state.errors
    );
    const { authenticateUserStatus, authenticationErrors } = this.props;

    return RegistryLoader(
      {
        values: this.state.values,
        errors: combinedErrors,
        handleOnFocus: this.handleOnFocus,
        handleFieldChange: this.handleFieldChange,
        handleOnBlur: this.handleOnBlur,
        handleSignIn: this.handleSignIn,
        showSignInForm: this.state.showSignInForm,
        toggleSignInForm: this.toggleSignInForm,
        authenticateUserStatus,
        authenticationErrors: authenticationErrors.map(error =>
          matchServerErrorCodes(
            error,
            get(this, 'props.localesContext.Language')
          )
        )
      },
      'components.CheckoutGuestContact',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(CheckoutGuestContact);
