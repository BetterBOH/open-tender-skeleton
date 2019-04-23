import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';
import { isValidEmail, isValidPhoneNumber } from 'utils/validation';

class CheckoutContact extends PureComponent {
  constructor(props) {
    super(...arguments);

    this.state = {
      firstName:
        get(props, 'customer.first_name') ||
        get(props, 'currentOrder.customer.first_name'),
      lastName:
        get(props, 'customer.last_name') ||
        get(props, 'currentOrder.customer.last_name'),
      email:
        get(props, 'customer.email') ||
        get(props, 'currentOrder.customer.email'),
      phoneNumber:
        get(props, 'customer.phone') ||
        get(props, 'currentOrder.customer.phone'),
      errors: null
    };
  }

  handleFieldChange = (field, value) => {
    this.setState({
      [field]: value,
      errors: null
    });
  };

  handleOnBlur = (field, value) => {
    const { bindCustomerToOrder, orderRef } = this.props;
    const { firstName, lastName, email, phoneNumber } = this.state;

    if (field === 'firstName' && !value) {
      return this.setState({
        errors: {
          [field]: [
            this.props.localesContext.Language.t(
              'checkout.contact.errors.firstName'
            )
          ]
        }
      });
    }

    if (field === 'lastName' && !value) {
      return this.setState({
        errors: {
          [field]: [
            this.props.localesContext.Language.t(
              'checkout.contact.errors.lastName'
            )
          ]
        }
      });
    }

    if (field === 'email' && !isValidEmail(value)) {
      return this.setState({
        errors: {
          [field]: [
            this.props.localesContext.Language.t(
              'checkout.contact.errors.email'
            )
          ]
        }
      });
    }

    if (field === 'phoneNumber' && !isValidPhoneNumber(value)) {
      return this.setState({
        errors: {
          [field]: [
            this.props.localesContext.Language.t(
              'checkout.contact.errors.phoneNumber'
            )
          ]
        }
      });
    }

    if (
      firstName &&
      lastName &&
      isValidEmail(email) &&
      isValidPhoneNumber(phoneNumber)
    ) {
      return bindCustomerToOrder(orderRef, {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        phone: this.state.phoneNumber
      });
    }
  };

  render() {
    const { firstName, lastName, email, phoneNumber, errors } = this.state;

    return RegistryLoader(
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        errors,
        handleFieldChange: this.handleFieldChange,
        handleOnBlur: this.handleOnBlur
      },
      'components.CheckoutContact',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(CheckoutContact);
