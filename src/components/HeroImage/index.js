import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

const HeroImage = props => {
  return RegistryLoader(props, 'components.HeroImage', () =>
    import('./presentation.js')
  );
};

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
  classes: PropTypes.string
};

HeroImage.defaultProps = {
  src: '',
  classes: ''
};

export default HeroImage;
