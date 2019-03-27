import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import {
  isValidCreditCardNumber,
  isValidCreditCardExpiration,
  isValidCreditCardCVV,
  isValidCreditCardZipCode
} from 'utils/validation';
import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';

class AddCreditCard extends PureComponent {
  static propTypes = {
    orderRef: PropTypes.object,
    setPaymentMethod: PropTypes.func,
    cancel: PropTypes.func
  };

  static defaultProps = {
    orderRef: {},
    setPaymentMethod: f => f,
    cancel: f => f
  };

  constructor(props) {
    super(props);
    this.state = {
      cardHolderName: '',
      ccNumber: '',
      ccExpiration: '',
      ccCvv: '',
      ccZip: '',
      errors: {
        cardHolderName: '',
        ccNumber: '',
        ccExpiration: '',
        ccCvv: '',
        ccZip: ''
      }
    };
  }

  validate = () => {
    const errors = {
      cardHolderName: '',
      ccNumber: '',
      ccExpiration: '',
      ccCvv: '',
      ccZip: ''
    };
    let hasErrors = false;
    if (!this.state.cardHolderName.length) {
      errors.cardHolderName = "Please enter the card holder's name.";
      hasErrors = true;
    }
    if (!isValidCreditCardNumber(this.state.ccNumber)) {
      errors.ccNumber = 'The credit card number is not valid.';
      hasErrors = true;
    }
    if (!isValidCreditCardExpiration(this.state.ccExpiration)) {
      errors.ccExpiration = 'The credit card number is not valid.';
      hasErrors = true;
    }
    if (!isValidCreditCardCVV(this.state.ccCvv)) {
      errors.ccCvv = 'CVV is required';
      hasErrors = true;
    }
    if (!isValidCreditCardZipCode(this.state.ccZip)) {
      errors.ccZip = 'Zip code is required';
      hasErrors = true;
    }
    this.setState({ errors: errors });

    return hasErrors;
  };

  submit = () => {
    const isNotValid = this.validate();
    if (isNotValid) return;

    const body = {
      cc_number: this.state.ccNumber,
      cc_expiration: this.state.ccExpiration.replace('/', ''),
      cc_cvv: this.state.ccCvv,
      cc_zip: this.state.ccZip
    };
    const orderRef = this.props.orderRef;
    this.props.setPaymentMethod(orderRef, 'credit', body);
  };

  setField = fieldValue => {
    this.setState(fieldValue);
  };

  render() {
    const { brandContext, localesContext, cancel } = this.props;

    const {
      cardHolderName,
      ccNumber,
      ccExpiration,
      ccCvv,
      ccZip,
      errors
    } = this.state;

    return RegistryLoader(
      {
        brandContext,
        localesContext,
        cancel,
        cardHolderName,
        ccNumber,
        ccExpiration,
        ccCvv,
        ccZip,
        errors,
        submit: this.submit,
        setField: this.setField
      },
      'components.AddCreditCard',
      () => import('./presentation')
    );
  }
}

export default withBrand(withLocales(AddCreditCard));
