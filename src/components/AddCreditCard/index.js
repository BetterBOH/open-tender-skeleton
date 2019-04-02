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
    handleCancel: PropTypes.func
  };

  static defaultProps = {
    orderRef: null,
    setPaymentMethod: f => f,
    handleCancel: f => f
  };

  constructor(props) {
    super(...arguments);
    this.state = {
      cardHolderName: '',
      ccNumber: '',
      ccExpiration: '',
      ccCvv: '',
      ccZip: '',
      cardHolderNameErrors: [],
      ccNumberErrors: [],
      ccExpirationErrors: [],
      ccCvvErrors: [],
      ccZipErrors: []
    };
    this.Language = get(this, 'props.localesContext.Language');
  }

  validateCardHolderName = () => {
    const cardHolderNameErrors = [];
    if (!this.state.cardHolderName.length) {
      cardHolderNameErrors.push(
        this.Language.t('addCreditCard.errors.cardHolderName')
      );
    }

    this.setState({ cardHolderNameErrors });

    return cardHolderNameErrors.length === 0;
  };

  validateCCN = () => {
    const ccNumberErrors = [];
    if (!isValidCreditCardNumber(this.state.ccNumber)) {
      ccNumberErrors.push(this.Language.t('addCreditCard.errors.ccNumber'));
    }

    this.setState({ ccNumberErrors });

    return ccNumberErrors.length === 0;
  };

  validateExpiration = () => {
    const ccExpirationErrors = [];
    if (!isValidCreditCardExpiration(this.state.ccExpiration)) {
      ccExpirationErrors.push(
        this.Language.t('addCreditCard.errors.ccExpiration')
      );
    }

    this.setState({ ccExpirationErrors });

    return ccExpirationErrors.length === 0;
  };

  validateCVV = () => {
    const ccCvvErrors = [];
    if (!isValidCreditCardCVV(this.state.ccCvv)) {
      ccCvvErrors.push(this.Language.t('addCreditCard.errors.ccCvv'));
    }

    this.setState({ ccCvvErrors });

    return ccCvvErrors.length === 0;
  };

  validateZip = () => {
    const ccZipErrors = [];
    if (!isValidCreditCardZipCode(this.state.ccZip)) {
      ccZipErrors.push(this.Language.t('addCreditCard.errors.ccZip'));
    }

    this.setState({ ccZipErrors });

    return ccZipErrors.length === 0;
  };

  validate = () => {
    return [
      this.validateCardHolderName(),
      this.validateCCN(),
      this.validateExpiration(),
      this.validateZip(),
      this.validateCVV()
    ].every(Boolean);
  };

  handleSubmit = () => {
    const isValid = this.validate();
    if (!isValid) return null;

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
    this.setState(cardHolderName, () => {
      if (this.state.cardHolderNameErrors.length) {
        this.validateCardHolderName();
      }
    });
  };

  setCCNumber = ccNumber => {
    this.setState(ccNumber, () => {
      if (this.state.ccNumberErrors.length) {
        this.validateCCN();
      }
    });
  };

  setCCExpiration = ccExpiration => {
    this.setState(ccExpiration, () => {
      if (this.state.ccExpirationErrors.length) {
        this.validateExpiration();
      }
    });
  };

  setCVV = ccCvv => {
    this.setState(ccCvv, () => {
      if (this.state.ccCvvErrors.length) {
        this.validateCVV();
      }
    });
  };

  setZip = ccZip => {
    this.setState(ccZip, () => {
      if (this.state.ccZipErrors.length) {
        this.validateZip();
      }
    });
  };

  render() {
    const { brandContext, localesContext, handleCancel } = this.props;

    const {
      cardHolderName,
      ccNumber,
      ccExpiration,
      ccCvv,
      ccZip,
      cardHolderNameErrors,
      ccNumberErrors,
      ccExpirationErrors,
      ccCvvErrors,
      ccZipErrors
    } = this.state;

    return RegistryLoader(
      {
        brandContext,
        localesContext,
        handleCancel,
        cardHolderName,
        ccNumber,
        ccExpiration,
        ccCvv,
        ccZip,
        cardHolderNameErrors,
        ccNumberErrors,
        ccExpirationErrors,
        ccCvvErrors,
        ccZipErrors,
        validateCardHolderName: this.validateCardHolderName,
        validateCCN: this.validateCCN,
        validateExpiration: this.validateExpiration,
        validateCVV: this.validateCVV,
        validateZip: this.validateZip,
        handleSubmit: this.handleSubmit,
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
