import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class PaymentDetails extends PureComponent {
  static propTypes = {
    orderRef: PropTypes.object,
    setPaymentMethod: PropTypes.func,
    handleCancel: PropTypes.func,
    paymentType: PropTypes.string
  };

  static defaultProps = {
    orderRef: {},
    setPaymentMethod: f => f,
    handleCancel: f => f,
    paymentType: ''
  };

  render() {
    const {
      paymentType,
      orderRef,
      setPaymentMethod,
      handleCancel
    } = this.props;

    return RegistryLoader(
      { paymentType, orderRef, setPaymentMethod, handleCancel },
      'components.PaymentDetails',
      () => import('./presentation')
    );
  }
}

export default PaymentDetails;
