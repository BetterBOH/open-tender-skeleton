import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class AddPromoCode extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func,
    error: PropTypes.string
  };

  static defaultProps = {
    handleSubmit: f => f,
    error: null
  };

  state = {
    promoCode: ''
  };

  handleChange = value => {
    this.setState({ promoCode: value });
  };

  handleBlur = () => {
    this.props.handleSubmit(this.state.promoCode);
  };

  render() {
    const { promoCode } = this.state;
    const { error } = this.props;

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
