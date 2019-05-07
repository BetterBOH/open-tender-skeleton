import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class AddPromoCode extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func,
    error: PropTypes.string,
    promoCode: PropTypes.string
  };

  static defaultProps = {
    handleSubmit: f => f,
    error: null,
    promoCode: ''
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      promoCode: props.promoCode
    };
  }

  handleChange = value => {
    return this.setState({ promoCode: value });
  };

  handleBlur = () => {
    return this.props.handleSubmit(this.state.promoCode);
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
