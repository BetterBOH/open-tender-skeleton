import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import RegistryLoader from 'lib/RegistryLoader';

class PaymentDetails extends PureComponent {
  static propTypes = {
    openTenderRef: OpenTenderRefModel.propTypes,
    createPayment: PropTypes.func,
    handleCancel: PropTypes.func,
    paymentType: PropTypes.string
  };

  static defaultProps = {
    openTenderRef: OpenTenderRefModel.defaultProps,
    createPayment: f => f,
    handleCancel: f => f,
    paymentType: ''
  };

  render() {
    const {
      paymentType,
      openTenderRef,
      createPayment,
      handleCancel
    } = this.props;

    return RegistryLoader(
      { paymentType, openTenderRef, createPayment, handleCancel },
      'components.PaymentDetails',
      () => import('./presentation')
    );
  }
}

export default PaymentDetails;
