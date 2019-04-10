import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import CustomerModel from 'constants/Models/CustomerModel';
import withUser from 'lib/withUser';

const AccountButton = React.memo(props => {
  return RegistryLoader(props, 'components.AccountButton', () =>
    import('./presentation.js')
  );
});

AccountButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  customer: CustomerModel.propTypes,
  userIsAuthenticated: PropTypes.bool
};

AccountButton.defaultProps = {
  className: '',
  icon: 'UserCircle',
  customer: null,
  userIsAuthenticated: false
};

export default withUser(AccountButton);
