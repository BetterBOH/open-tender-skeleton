import React from 'react';
import CustomerModel from 'constants/Models/CustomerModel';
import RegistryLoader from 'lib/RegistryLoader';

const DashboardHero = React.memo(({ customer }) =>
  RegistryLoader({ customer }, 'components.DashboardHero', () =>
    import('./presentation.js')
  )
);

DashboardHero.propTypes = {
  customer: CustomerModel.propTypes
};

DashboardHero.defaultProps = {
  customer: CustomerModel.defaultProps
};

export default DashboardHero;
