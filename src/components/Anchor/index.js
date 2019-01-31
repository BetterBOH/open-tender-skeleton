import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const Anchor = props =>
  RegistryLoader(props, 'components.Anchor', () => import('./presentation.js'));

Anchor.propTypes = {
  url: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Anchor.defaultProps = {
  url: null,
  children: null
};

export default Anchor;
