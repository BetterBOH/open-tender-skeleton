import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import linkIsExternal from 'utils/linkIsExternal';

const Anchor = props =>
  RegistryLoader(
    { ...props, linkIsExternal: linkIsExternal(props.url) },
    'components.Anchor',
    () => import('./presentation.js')
  );

Anchor.propTypes = {
  url: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  style: PropTypes.object
};

Anchor.defaultProps = {
  url: null,
  children: null,
  className: '',
  style: null
};

export default Anchor;
