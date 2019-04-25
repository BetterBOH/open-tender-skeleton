import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import DrawerTypes from 'constants/DrawerTypes';

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
    serviceType: PropTypes.string
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
    serviceType: PICKUP
  };

  handleClickAddPayment = () => {
    const { actions } = this.props;

    return actions.setDrawer(DrawerTypes.PAYMENT_METHODS);
  };

  render() {
    const { accountDetails, serviceType } = this.props;
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
        handleClickAddPayment: this.handleClickAddPayment
      },
      'components.AccountDetails',
      () => import('./presentation.js')
    );
  }
}

export default AccountDetails;
