import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import { DefaultAcceptedPaymentTypes } from 'constants/PaymentMethods';

class ChoosePaymentType extends PureComponent {
  static propTypes = {
    confirm: PropTypes.func,
    cancel: PropTypes.func,
    newPaymentMethodType: PropTypes.string,
    selectPaymentMethodType: PropTypes.func
  };

  static defaultProps = {
    confirm: f => f,
    cancel: f => f,
    newPaymentMethodType: '',
    selectPaymentMethodType: f => f
  };

  render() {
    const {
      confirm,
      cancel,
      newPaymentMethodType,
      selectPaymentMethodType
    } = this.props;

    return RegistryLoader(
      {
        paymentTypes: DefaultAcceptedPaymentTypes,
        confirm,
        cancel,
        selectPaymentMethodType,
        newPaymentMethodType
      },
      'components.ChoosePaymentType',
      () => import('./presentation')
    );
  }
}

export default ChoosePaymentType;
