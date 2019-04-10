import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import { FULFILLED, IDLE, PENDING, REJECTED } from 'constants/Status';

class PromoCode extends PureComponent {
  static propTypes = {
    setPromoCodeStatus: PropTypes.string,
    setPromoCodeError: PropTypes.string,
    handleSubmit: PropTypes.func
  };

  static defaultProps = {
    setPromoCodeStatus: IDLE,
    setPromoCodeError: null,
    handleSubmit: f => f
  };

  state = {
    promoCode: '',
    error: this.props.setPromoCodeError
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.setPromoCodeStatus === PENDING &&
      this.props.setPromoCodeStatus === REJECTED
    ) {
      this.setState({ error: this.props.setPromoCodeError });
    }

    if (
      prevProps.setPromoCodeStatus === PENDING &&
      this.props.setPromoCodeStatus === FULFILLED
    ) {
      // TODO: add handle set promo code success
      this.setState({ error: null });
    }
  }

  handleFieldChange = value => {
    this.setState({ promoCode: value });
  };

  handleClear = () => {
    this.setState({
      promoCode: '',
      error: null
    });
  };

  render() {
    return RegistryLoader(
      {
        promoCode: this.state.promoCode,
        error: this.state.error,
        handleFieldChange: this.handleFieldChange,
        handleClear: this.handleClear,
        // TODO: add functionality to set promo code on current order to be validated
        handleSubmit: this.props.handleSubmit,
        localesContext: this.props.localesContext
      },
      'components.PromoCode',
      () => import('./presentation.js')
    );
  }
}

export default PromoCode;
