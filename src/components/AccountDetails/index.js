import { PureComponent } from 'react';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import AddressModel from 'constants/Models/AddressModel';
import PaymentModel from 'constants/Models/PaymentModel';
import withDrawer from 'lib/withDrawer';

class AccountDetails extends PureComponent {
  static propTypes = {
    accountDetails: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      addresses: PropTypes.arrayOf(AddressModel.propTypes),
      defaultAddress: AddressModel.propTypes,
      payments: PropTypes.arrayOf(PaymentModel.propTypes),
      defaultPayment: PaymentModel.propTypes
    }),
    updateUser: PropTypes.func,
    updateUserStatus: PropTypes.string,
    handleClickEditName: PropTypes.func,
    handleClickEditEmail: PropTypes.func,
    handleClickEditPhone: PropTypes.func,
    handleClickEditPassword: PropTypes.func
  };

  static defaultProps = {
    accountDetails: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      addresses: [],
      defaultAddress: null,
      payments: [],
      defaultPayment: null
    },
    updateUser: f => f,
    updateUserStatus: Status.IDLE
  };

  render() {
    const {
      accountDetails,
      openTenderRef,
      updateUser,
      updateUserStatus,
      handleClickEditName,
      handleClickEditEmail,
      handleClickEditPhone,
      handleClickEditPassword,
      handleClickAddPayment
    } = this.props;
    debugger;
    return RegistryLoader(
      {
        accountDetails,
        openTenderRef,
        updateUser,
        updateUserStatus,
        handleClickEditName,
        handleClickEditEmail,
        handleClickEditPhone,
        handleClickEditPassword,
        handleClickAddPayment
      },
      'components.AccountDetails',
      () => import('./presentation.js')
    );
  }
}

export default withDrawer(AccountDetails);
