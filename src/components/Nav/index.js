import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const Nav = props => {
  return RegistryLoader(props, 'components.Nav', () =>
    import('./presentation.js')
  );
};

Nav.propTypes = {
  brand: PropTypes.shape({
    logoImage: PropTypes.string
  })
};

Nav.defaultProps = {
  brand: {
    logoImage: ''
  }
};

export default Nav;
