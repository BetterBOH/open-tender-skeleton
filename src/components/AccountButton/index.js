import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

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

AccountButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  userIsAuthenticated: PropTypes.bool
};

AccountButton.defaultProps = {
  className: '',
  icon: '',
  onClick: f => f,
  userIsAuthenticated: false
};

export default AccountButton;
