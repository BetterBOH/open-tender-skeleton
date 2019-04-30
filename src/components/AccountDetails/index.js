import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import AddressModel from 'constants/Models/AddressModel';
import PaymentModel from 'constants/Models/PaymentModel';
import { PICKUP } from 'constants/OpenTender';

class AccountDetails extends PureComponent {
  static propTypes = {
    accountDetails: PropTypes.shape({
      fullName: PropTypes.string,
      email: PropTypes.string,
      addresses: PropTypes.arrayOf(AddressModel.propTypes),
      defaultAddress: AddressModel.propTypes,
      payments: PropTypes.arrayOf(PaymentModel.propTypes),
      defaultPayment: PaymentModel.propTypes
    }),
    serviceType: PropTypes.string,
    handleClickAddPayment: PropTypes.func
  };

  static defaultProps = {
    accountDetails: {
      fullName: '',
      email: '',
      addresses: [],
      defaultAddress: null,
      payments: [],
      defaultPayment: null
    },
    serviceType: PICKUP,
    handleClickAddPayment: f => f
  };

  render() {
    const { accountDetails, serviceType, handleClickAddPayment } = this.props;
    const {
      fullName,
      email,
      addresses,
      defaultAddress,
      payments,
      defaultPayment
    } = accountDetails;

    return RegistryLoader(
      {
        fullName,
        email,
        addresses,
        defaultAddress,
        payments,
        defaultPayment,
        serviceType,
        handleClickAddPayment
      },
      'components.AccountDetails',
      () => import('./presentation.js')
    );
  }
}

export default AccountDetails;
