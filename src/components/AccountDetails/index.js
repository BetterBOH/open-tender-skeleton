import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import AccountDetailsModel from 'constants/Models/AccountDetailsModel';

class AccountDetails extends PureComponent {
  static propTypes = {
    accountDetails: AccountDetailsModel.propTypes
  };

  static defaultProps = {
    accountDetails: AccountDetailsModel.defaultProps
  };

  render() {
    const { accountDetails } = this.props;

    return RegistryLoader({ accountDetails }, 'components.AccountDetails', () =>
      import('./presentation.js')
    );
  }
}

export default AccountDetails;
