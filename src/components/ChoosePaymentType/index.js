import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class ChoosePaymentType extends PureComponent {
  static propTypes = {
    confirm: PropTypes.func,
    cancel: PropTypes.func,
    paymentTypes: PropTypes.array,
    newPaymentMethodType: PropTypes.string,
    selectPaymentMethodType: PropTypes.func
  };

  static defaultProps = {
    confirm: f => f,
    cancel: f => f,
    paymentTypes: [],
    newPaymentMethodType: '',
    selectPaymentMethodType: f => f
  };

  render() {
    const {
      paymentTypes,
      confirm,
      cancel,
      newPaymentMethodType,
      selectPaymentMethodType
    } = this.props;
    return RegistryLoader(
      {
        paymentTypes,
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
