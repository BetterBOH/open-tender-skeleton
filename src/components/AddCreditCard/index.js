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
    super(...arguments);
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
    const { Language } = this.props.localesContext;
    const errors = {
      cardHolderName: '',
      ccNumber: '',
      ccExpiration: '',
      ccCvv: '',
      ccZip: ''
    };

    if (!this.state.cardHolderName.length) {
      errors.cardHolderName = Language.t('addCreditCard.errors.cardHolderName');
    }
    if (!isValidCreditCardNumber(this.state.ccNumber)) {
      errors.ccNumber = Language.t('addCreditCard.errors.ccNumber');
    }
    if (!isValidCreditCardExpiration(this.state.ccExpiration)) {
      errors.ccExpiration = Language.t('addCreditCard.errors.ccExpiration');
    }
    if (!isValidCreditCardCVV(this.state.ccCvv)) {
      errors.ccCvv = Language.t('addCreditCard.errors.ccCvv');
    }
    if (!isValidCreditCardZipCode(this.state.ccZip)) {
      errors.ccZip = Language.t('addCreditCard.errors.ccZip');
    }
    this.setState({ errors: errors });

    return Object.values(errors).some(error => !!error);
  };

  submit = () => {
    const isNotValid = this.validate();
    if (isNotValid) return null;

    const body = {
      cc_number: this.state.ccNumber,
      cc_expiration: this.state.ccExpiration.replace('/', ''),
      cc_cvv: this.state.ccCvv,
      cc_zip: this.state.ccZip
    };
    const orderRef = this.props.orderRef;
    return this.props.setPaymentMethod(orderRef, 'credit', body);
  };

  setCardholderName = cardHolderName => {
    this.setState(cardHolderName);
  };

  setCCNumber = ccNumber => {
    this.setState(ccNumber);
  };

  setCCExpiration = ccExpiration => {
    this.setState(ccExpiration);
  };

  setCVV = ccCvv => {
    this.setState(ccCvv);
  };

  setZip = ccZip => {
    this.setState(ccZip);
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
        setCardholderName: this.setCardholderName,
        setCCNumber: this.setCCNumber,
        setCCExpiration: this.setCCExpiration,
        setCVV: this.setCVV,
        setZip: this.setZip
      },
      'components.AddCreditCard',
      () => import('./presentation')
    );
  }
}

export default withBrand(withLocales(AddCreditCard));
