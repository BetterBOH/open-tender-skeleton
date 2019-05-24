import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class ChoosePaymentType extends PureComponent {
  static propTypes = {
    switchToCreatePaymentMethod: PropTypes.func,
    switchToSelectExistingPaymentMethod: PropTypes.func,
    paymentTypes: PropTypes.arrayOf(PropTypes.string),
    newPaymentMethodType: PropTypes.string,
    selectPaymentMethodType: PropTypes.func
  };

  static defaultProps = {
    switchToCreatePaymentMethod: f => f,
    switchToSelectExistingPaymentMethod: f => f,
    paymentTypes: [],
    newPaymentMethodType: '',
    selectPaymentMethodType: f => f
  };

  componentDidMount() {
    const {
      paymentTypes,
      switchToCreatePaymentMethod,
      selectPaymentMethodType
    } = this.props;

    if (paymentTypes.length === 1) {
      selectPaymentMethodType(paymentTypes[0]);

      return switchToCreatePaymentMethod();
    }
  }

  render() {
    const {
      switchToCreatePaymentMethod,
      switchToSelectExistingPaymentMethod,
      paymentTypes,
      newPaymentMethodType,
      selectPaymentMethodType
    } = this.props;

    return RegistryLoader(
      {
        paymentTypes,
        switchToCreatePaymentMethod,
        switchToSelectExistingPaymentMethod,
        selectPaymentMethodType,
        newPaymentMethodType
      },
      'components.ChoosePaymentType',
      () => import('./presentation')
    );
  }
}

export default ChoosePaymentType;
