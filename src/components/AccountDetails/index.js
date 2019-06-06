import { PureComponent } from 'react';
import { Status } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import AddressModel from 'constants/Models/AddressModel';
import PaymentModel from 'constants/Models/PaymentModel';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import withDrawer from 'lib/withDrawer';
import get from 'utils/get';

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
    openTenderRef: OpenTenderRefModel.propTypes,
    updateUser: PropTypes.func,
    updateUserStatus: PropTypes.string,
    updateUserErrors: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
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
    openTenderRef: OpenTenderRefModel.defaultProps,
    updateUser: f => f,
    updateUserStatus: Status.IDLE,
    updateUserErrors: null
  };

  handleToggleAllergen = allergen => {
    const {
      addAllergens,
      removeAllergens,
      openTenderRef,
      accountDetails
    } = this.props;
    const userAllergens = get(accountDetails, 'allergens');

    if (userAllergens.includes(allergen)) {
      return removeAllergens(openTenderRef, [allergen]);
    }

    return addAllergens(openTenderRef, [allergen]);
  };

  render() {
    const {
      allergens,
      accountDetails,
      openTenderRef,
      updateUser,
      updateUserStatus,
      updateUserErrors,
      handleClickEditName,
      handleClickEditEmail,
      handleClickEditPhone,
      handleClickEditPassword,
      handleClickEditAllergens,
      handleClickAddPayment
    } = this.props;

    return RegistryLoader(
      {
        allergens,
        accountDetails,
        openTenderRef,
        updateUser,
        updateUserStatus,
        updateUserErrors,
        handleClickEditName,
        handleClickEditEmail,
        handleClickEditPhone,
        handleClickEditPassword,
        handleClickEditAllergens,
        handleClickAddPayment,
        handleToggleAllergen: this.handleToggleAllergen
      },
      'components.AccountDetails',
      () => import('./presentation.js')
    );
  }
}

export default withDrawer(AccountDetails);
