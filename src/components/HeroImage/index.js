import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

const HeroImage = React.memo(props =>
  RegistryLoader(props, 'components.HeroImage', () =>
    import('./presentation.js')
  )
);

HeroImage.propTypes = {
  src: PropTypes.string.isRequired
};

HeroImage.defaultProps = {
  src: ''
};

export default HeroImage;
