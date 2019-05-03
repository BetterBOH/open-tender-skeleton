import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import AddressModel from 'constants/Models/AddressModel';
import PaymentModel from 'constants/Models/PaymentModel';
import { PICKUP } from 'constants/OpenTender';
import withDrawer from 'lib/withDrawer';

class AccountDetails extends PureComponent {
  static propTypes = {
    accountDetails: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
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
      firstName: '',
      lastName: '',
      email: '',
      addresses: [],
      defaultAddress: null,
      payments: [],
      defaultPayment: null
    },
    serviceType: PICKUP
  };

  render() {
    const { accountDetails, serviceType } = this.props;

    return RegistryLoader(
      {
        accountDetails,
        serviceType
      },
      'components.AccountDetails',
      () => import('./presentation.js')
    );
  }
}

export default withDrawer(AccountDetails);
