import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import AddressModel from 'constants/Models/AddressModel';
import PaymentModel from 'constants/Models/PaymentModel';

class AccountDetails extends PureComponent {
  static propTypes = {
    accountDetails: PropTypes.shape({
      fullName: PropTypes.string,
      email: PropTypes.string,
      addresses: PropTypes.arrayOf(AddressModel.propTypes),
      defaultAddress: AddressModel.propTypes,
      payments: PropTypes.arrayOf(PaymentModel.propTypes),
      defaultPayment: PaymentModel.propTypes
    })
  };

  static defaultProps = {
    accountDetails: {
      fullName: '',
      email: '',
      addresses: [],
      defaultAddress: null,
      payments: [],
      defaultPayment: null
    }
  };

  render() {
    const { accountDetails } = this.props;
    const {
      fullName,
      email,
      addresses,
      defaultAddress,
      payments,
      defaultPayment
    } = accountDetails;

    return RegistryLoader(
      { fullName, email, addresses, defaultAddress, payments, defaultPayment },
      'components.AccountDetails',
      () => import('./presentation.js')
    );
  }
}

export default AccountDetails;
