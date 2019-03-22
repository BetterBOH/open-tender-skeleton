import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';

class PromoCode extends PureComponent {
  static propTypes = {
    validPromoCodes: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    validPromoCodes: []
  };

  state = {
    promoCode: '',
    error: null
  };

  handleFieldChange = value => {
    this.setState({ promoCode: value });
  };

  handleClear = () => {
    this.setState({
      promoCode: '',
      error: null
    });
  };

  handleSubmit = () => {
    const { validPromoCodes, localesContext } = this.props;

    if (!validPromoCodes.includes(this.state.promoCode)) {
      return this.setState({
        error: localesContext.Language.t('checkout.errors.promoCodeIsInvalid')
      });
    }

    // TODO: add functionality to apply promo code

    this.handleClear();
  };

  render() {
    return RegistryLoader(
      {
        promoCode: this.state.promoCode,
        error: this.state.error,
        handleFieldChange: this.handleFieldChange,
        handleClear: this.handleClear,
        handleSubmit: this.handleSubmit,
        localesContext: this.props.localesContext
      },
      'components.PromoCode',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(PromoCode);
