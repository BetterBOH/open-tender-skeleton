import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import CustomerModel from 'constants/Models/CustomerModel';
import BrandModel from 'constants/Models/BrandModel';

const Nav = React.memo(({ customer, brand }) =>
  RegistryLoader({ customer, brand }, 'components.Nav', () =>
    import('./presentation.js')
  )
);

Nav.propTypes = {
  brand: BrandModel.propTypes,
  customer: CustomerModel.propTypes
};

Nav.defaultProps = {
  brand: BrandModel.defaultProps,
  customer: CustomerModel.defaultProps
};

export default Nav;
