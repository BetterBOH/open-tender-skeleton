import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import BrandModel from 'constants/Models/BrandModel';

const Footer = React.memo(({ brand }) =>
  RegistryLoader({ brand }, 'components.Footer', () =>
    import('./presentation.js')
  )
);

Footer.propTypes = {
  brand: BrandModel.propTypes
};

Footer.defaultProps = {
  brand: BrandModel.defaultProps
};

export default Footer;
