import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import { CREDIT_CARD } from 'constants/OpenTender';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';
import {
  isValidCreditCardNumber,
  isValidCreditCardExpiration,
  isValidCreditCardCVV,
  isValidCreditCardZipCode
} from 'utils/validation';

class AddCreditCard extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      createPayment: PropTypes.func
    }),
    openTenderRef: OpenTenderRefModel.propTypes,
    handleCancel: PropTypes.func
  };

  static defaultProps = {
    actions: {
      createPayment: f => f
    },
    openTenderRef: OpenTenderRefModel.defaultProps,
    handleCancel: f => f
  };

  state = {
    cardHolderName: '',
    ccNumber: '',
    ccExpiration: '',
    ccCvv: '',
    ccZip: '',
    cardHolderNameErrors: [],
    ccNumberErrors: [],
    ccExpirationErrors: [],
    ccCvvErrors: [],
    ccZipErrors: [],
    setAsDefaultIsSelected: false
  };

  toggleSetDefault = () => {
    return this.setState(prevState => ({
      ...prevState,
      setAsDefaultIsSelected: !prevState.setAsDefaultIsSelected
    }));
  };

  validateCardHolderName = () => {
    const cardHolderNameErrors = [];
    if (!this.state.cardHolderName.length) {
      cardHolderNameErrors.push(
        this.props.localesContext.Language.t(
          'addCreditCard.errors.cardHolderName'
        )
      );
    }

    this.setState({ cardHolderNameErrors });

    return cardHolderNameErrors.length === 0;
  };

  validateCCN = () => {
    const ccNumberErrors = [];
    if (!isValidCreditCardNumber(this.state.ccNumber)) {
      ccNumberErrors.push(
        this.props.localesContext.Language.t('addCreditCard.errors.ccNumber')
      );
    }

    this.setState({ ccNumberErrors });

    return ccNumberErrors.length === 0;
  };

  validateExpiration = () => {
    const ccExpirationErrors = [];
    if (!isValidCreditCardExpiration(this.state.ccExpiration)) {
      ccExpirationErrors.push(
        this.props.localesContext.Language.t(
          'addCreditCard.errors.ccExpiration'
        )
      );
    }

    this.setState({ ccExpirationErrors });

    return ccExpirationErrors.length === 0;
  };

  validateCVV = () => {
    const ccCvvErrors = [];
    if (!isValidCreditCardCVV(this.state.ccCvv)) {
      ccCvvErrors.push(
        this.props.localesContext.Language.t('addCreditCard.errors.ccCvv')
      );
    }

    this.setState({ ccCvvErrors });

    return ccCvvErrors.length === 0;
  };

  validateZip = () => {
    const ccZipErrors = [];
    if (!isValidCreditCardZipCode(this.state.ccZip)) {
      ccZipErrors.push(
        this.props.localesContext.Language.t('addCreditCard.errors.ccZip')
      );
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

  handleSubmit = () => {
    const {
      actions,
      orderRef,
      openTenderRef,
      userIsAuthenticated
    } = this.props;

    const isValid = this.validate();
    if (!isValid) return null;

    const body = {
      cc_number: this.state.ccNumber,
      cc_expiration: this.state.ccExpiration.replace('/', ''),
      cc_cvv: this.state.ccCvv,
      cc_zip: this.state.ccZip
    };

    /**
     * If an authenticated user adds a payment and selects 'Set as Default',
     * we create the payment method and set it as default.
     * */

    if (userIsAuthenticated) {
      return actions.createPayment(openTenderRef, body).then(res => {
        const paymentMethodId = get(res, 'value[0].customer_card_id');

        if (this.state.setAsDefaultIsSelected && !!paymentMethodId) {
          return actions.setDefaultPayment(openTenderRef, paymentMethodId);
        }
      });

      /**
       * If an unauthenticated user adds a payment (can only be done at checkout),
       * we set the card on the order.
       * */
    } else {
      return actions.setPaymentMethod(orderRef, CREDIT_CARD, body);
    }
  };

  render() {
    const { userIsAuthenticated, handleCancel } = this.props;

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
      ccZipErrors,
      setAsDefaultIsSelected
    } = this.state;

    return RegistryLoader(
      {
        userIsAuthenticated,
        handleCancel,
        handleSubmit: this.handleSubmit,
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
        setCardholderName: this.setCardholderName,
        setCCNumber: this.setCCNumber,
        setCCExpiration: this.setCCExpiration,
        setCVV: this.setCVV,
        setZip: this.setZip,
        toggleSetDefault: this.toggleSetDefault,
        setAsDefaultIsSelected
      },
      'components.AddCreditCard',
      () => import('./presentation')
    );
  }
}

export default withLocales(AddCreditCard);
