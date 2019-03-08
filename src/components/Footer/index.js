import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';

const Footer = React.memo(props =>
  RegistryLoader(props, 'components.Footer', () => import('./presentation.js'))
);

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string
    })
  ),
  openTenderLogo: PropTypes.string
};

Footer.defaultProps = {
  links: [],
  openTenderLogo: ''
};

export default withLocales(withBrand(Footer));
