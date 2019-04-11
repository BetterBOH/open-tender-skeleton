import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import RegistryLoader from 'lib/RegistryLoader';

class PaymentDetails extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      createPayment: PropTypes.func
    }),
    openTenderRef: OpenTenderRefModel.propTypes,
    handleCancel: PropTypes.func,
    paymentType: PropTypes.string
  };

  static defaultProps = {
    actions: {
      createPayment: f => f
    },
    openTenderRef: OpenTenderRefModel.defaultProps,
    handleCancel: f => f,
    paymentType: ''
  };

  render() {
    const { actions, paymentType, openTenderRef, handleCancel } = this.props;

    return RegistryLoader(
      { actions, paymentType, openTenderRef, handleCancel },
      'components.PaymentDetails',
      () => import('./presentation')
    );
  }
}

export default PaymentDetails;
