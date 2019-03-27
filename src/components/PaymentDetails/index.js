import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class PaymentDetails extends PureComponent {
  static propTypes = {
    orderRef: PropTypes.object,
    setPaymentMethod: PropTypes.func,
    cancel: PropTypes.func,
    paymentType: PropTypes.string
  };

  static defaultProps = {
    orderRef: {},
    setPaymentMethod: f => f,
    cancel: f => f,
    paymentType: ''
  };

  render() {
    const { paymentType, orderRef, setPaymentMethod, cancel } = this.props;

    return RegistryLoader(
      { paymentType, orderRef, setPaymentMethod, cancel },
      'components.PaymentDetails',
      () => import('./presentation')
    );
  }
}

export default PaymentDetails;
