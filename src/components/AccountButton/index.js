import RegistryLoader from 'lib/RegistryLoader';

import get from 'utils/get';

const AccountButton = props => {
  return RegistryLoader(
    {
      ...props,
      userIsAuthenticated: get(props, 'userIsAuthenticated')
    },
    'components.AccountButton',
    () => import('./presentation.js')
  );
};

export default AccountButton;
