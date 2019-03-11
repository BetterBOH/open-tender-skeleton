import React from 'react';
import CustomerModel from 'constants/Models/CustomerModel';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

const DashboardHero = React.memo(props =>
  RegistryLoader(props, 'components.DashboardHero', () =>
    import('./presentation.js')
  )
);

DashboardHero.propTypes = {
  customer: CustomerModel.propTypes
};

DashboardHero.defaultProps = {
  customer: CustomerModel.defaultProps
};

export default withLocales(DashboardHero);
