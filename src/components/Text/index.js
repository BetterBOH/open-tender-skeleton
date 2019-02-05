import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const Text = props => {
  return RegistryLoader(props, 'components.Text', () =>
    import('./presentation.js')
  );
};

Text.propTypes = {
  elem: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object
};

Text.defaultProps = {
  elem: 'span',
  children: null,
  className: '',
  size: 'body',
  style: null
};

export default Text;
