import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import RegistryLoader from 'lib/RegistryLoader';

class PaymentDetails extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      createPayment: PropTypes.func,
      setPaymentMethod: PropTypes.func
    }),
    openTenderRef: OpenTenderRefModel.propTypes,
    handleCancel: PropTypes.func,
    paymentType: PropTypes.string,
    userIsAuthenticated: PropTypes.bool
  };

  static defaultProps = {
    actions: {
      createPayment: f => f,
      setPaymentMethod: f => f
    },
    openTenderRef: OpenTenderRefModel.defaultProps,
    handleCancel: f => f,
    paymentType: '',
    userIsAuthenticated: false
  };

  render() {
    const {
      actions,
      paymentType,
      openTenderRef,
      orderRef,
      handleCancel,
      userIsAuthenticated
    } = this.props;

    return RegistryLoader(
      {
        actions,
        paymentType,
        openTenderRef,
        orderRef,
        userIsAuthenticated,
        handleCancel
      },
      'components.PaymentDetails',
      () => import('./presentation')
    );
  }
}

export default PaymentDetails;
