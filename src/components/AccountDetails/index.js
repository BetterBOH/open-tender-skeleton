import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import AccountDetailsModel from 'constants/Models/AccountDetailsModel';
import withLocales from 'lib/withLocales';

const AccountDetails = React.memo(props =>
  RegistryLoader(props, 'components.AccountDetails', () =>
    import('./presentation.js')
  )
);

AccountDetails.propTypes = {
  accountDetails: AccountDetailsModel.proptypes
};

AccountDetails.defaultProps = {
  accountDetails: AccountDetailsModel.defaultProps
};

export { AccountDetails };
export default withLocales(AccountDetails);
