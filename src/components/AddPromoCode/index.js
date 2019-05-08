import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class AddPromoCode extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func,
    errors: PropTypes.arrayOf(
      PropTypes.shape({
        source: PropTypes.string,
        title: PropTypes.string,
        code: PropTypes.string
      })
    ),
    promoCode: PropTypes.string
  };

  static defaultProps = {
    handleSubmit: f => f,
    errors: [],
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
    const { errors } = this.props;

    return RegistryLoader(
      {
        handleChange: this.handleChange,
        handleBlur: this.handleBlur,
        promoCode,
        errors
      },
      'components.AddPromoCode',
      () => import('./presentation.js')
    );
  }
}

export default AddPromoCode;
