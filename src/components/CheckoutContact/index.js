import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';
import { isValidEmail, isValidPhone } from 'utils/validation';

class CheckoutContact extends PureComponent {
  state = {
    firstName: get(this, 'props.customer.first_name'),
    lastName: get(this, 'props.customer.last_name'),
    email: get(this, 'props.customer.email'),
    phoneNumber: get(this, 'props.customer.phone_number'),
    errors: null
  };

  handleFieldChange = (field, value) => {
    this.setState({
      [field]: value,
      errors: null
    });
  };

  handleOnBlur = (field, value) => {
    const { bindCustomerToOrder, orderRef } = this.props;

    if (field === 'firstName' && !value) {
      this.setState({
        errors: [
          this.props.localesContext.Language.t(
            'checkout.contact.errors.firstName'
          )
        ]
      });
    }

    if (field === 'lastName' && !value) {
      this.setState({
        errors: [
          this.props.localesContext.Language.t(
            'checkout.contact.errors.lastName'
          )
        ]
      });
    }

    if (field === 'email' && !isValidEmail(value)) {
      this.setState({
        errors: [
          this.props.localesContext.Language.t(
            'checkout.contact.errors.lastName'
          )
        ]
      });
    }

    if (field === 'phoneNumber' && !isValidPhone(value)) {
      this.setState({
        errors: [
          this.props.localesContext.Language.t(
            'checkout.contact.errors.phoneNumber'
          )
        ]
      });
    }

    return bindCustomerToOrder(orderRef, {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
    });
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
