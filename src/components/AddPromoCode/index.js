import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class AddPromoCode extends PureComponent {
  static propTypes = {};
  static defaultProps = {};

  state = {
    promoCode: '',
    error: null
  };

  handleChange = value => {
    this.setState({ promoCode: value });
  };

  handleBlur = () => {
    this.props.handleSubmit(this.state.promoCode);
  };

  render() {
    const { promoCode, error } = this.state;
    return RegistryLoader(
      {
        handleChange: this.handleChange,
        handleBlur: this.handleBlur,
        promoCode,
        error
      },
      'components.AddPromoCode',
      () => import('./presentation.js')
    );
  }
}

export default AddPromoCode;
