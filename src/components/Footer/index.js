import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const Footer = React.memo(props =>
  RegistryLoader(props, 'components.Footer', () => import('./presentation.js'))
);

Footer.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  logoImage: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string
    })
  ),
  openTenderLogo: PropTypes.string
};

Footer.defaultProps = {
  backgroundColor: null,
  textColor: null,
  logoImage: null,
  links: [],
  openTenderLogo: ''
};

export default Footer;
