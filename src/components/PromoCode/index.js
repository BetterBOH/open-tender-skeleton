import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';

class PromoCode extends PureComponent {
  static propTypes = {
    setPromoCodeStatus: PropTypes.string,
    setPromoCodeError: PropTypes.string,
    handleSubmit: PropTypes.func
  };

  static defaultProps = {
    setPromoCodeStatus: Status.IDLE,
    setPromoCodeError: null,
    handleSubmit: f => f
  };

  state = {
    promoCode: '',
    error: this.props.setPromoCodeError
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.setPromoCodeStatus === Status.PENDING &&
      this.props.setPromoCodeStatus === Status.REJECTED
    ) {
      this.setState({ error: this.props.setPromoCodeError });
    }

    if (
      prevProps.setPromoCodeStatus === Status.PENDING &&
      this.props.setPromoCodeStatus === Status.FULFILLED
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
        handleSubmit: this.props.handleSubmit
      },
      'components.PromoCode',
      () => import('./presentation.js')
    );
  }
}

export default PromoCode;
