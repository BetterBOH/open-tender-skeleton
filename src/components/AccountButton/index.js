import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import CustomerModel from 'constants/Models/CustomerModel';
import withUser from 'lib/withUser';

const AccountButton = React.memo(
  ({ className, icon, customer, userIsAuthenticated }) => {
    return RegistryLoader(
      {
        className,
        icon,
        customer,
        userIsAuthenticated
      },
      'components.AccountButton',
      () => import('./presentation.js')
    );
  }
);

AccountButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  customer: CustomerModel.propTypes,
  userIsAuthenticated: PropTypes.bool
};

AccountButton.defaultProps = {
  className: '',
  icon: 'UserCircle',
  customer: CustomerModel.defaultProps,
  userIsAuthenticated: false
};

export default withUser(AccountButton);
