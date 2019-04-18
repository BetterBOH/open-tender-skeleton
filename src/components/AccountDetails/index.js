import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import AccountDetailsModel from 'constants/Models/AccountDetailsModel';
import withLocales from 'lib/withLocales';

class AccountDetails extends PureComponent {
  static propTypes = {
    accountDetails: AccountDetailsModel.propTypes
  };

  static defaultProps = {
    accountDetails: AccountDetailsModel.defaultProps
  };

  render() {
    const { accountDetails, localesContext } = this.props;

    const addressText = get(accountDetails, 'defaultAddress.street_address')
      ? get(accountDetails, 'defaultAddress.street_address')
      : localesContext.Language.t('account.addAddress');

    const paymentText =
      get(accountDetails, 'defaultPayment.card_type') &&
      get(accountDetails, 'defaultPayment.last4')
        ? `${get(
            accountDetails,
            'defaultPayment.card_type'
          )} ${localesContext.Language.t('account.ccEndingIn')}${get(
            accountDetails,
            'defaultPayment.last4'
          )}`
        : localesContext.Language.t('account.noDefaultPayment');

    const numberOfAddresses = `${localesContext.Language.t(
      'account.delivery'
    )} (${get(accountDetails, 'addresses.length', 0)})`;

    const numberOfPayments = `${localesContext.Language.t(
      'account.payment'
    )} (${get(accountDetails, 'payments.length', 0)})`;

    const formattedAccountDetails = [
      {
        label: localesContext.Language.t('account.name'),
        icon: 'User',
        value: get(accountDetails, 'fullName', '')
      },
      {
        label: localesContext.Language.t('account.email'),
        icon: 'At',
        value: get(accountDetails, 'email', '')
      },
      {
        label: localesContext.Language.t('account.password'),
        icon: 'Lock',
        value: '*********'
      },
      {
        label: numberOfAddresses,
        icon: 'Map',
        value: addressText
      },
      {
        label: numberOfPayments,
        icon: 'CreditCard',
        value: paymentText
      }
    ];

    return RegistryLoader(
      { formattedAccountDetails },
      'components.AccountDetails',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(AccountDetails);
