import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const LinkButton = props => {
  return RegistryLoader(props, 'components.LinkButton', () =>
    import('./presentation.js')
  );
};

LinkButton.PropTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.string
};

LinkButton.defaultProps = {
  arrow: true,
  className: '',
  children: null,
  iconLeft: null,
  iconRight: 'Right',
  onClick: f => f,
  text: '',
  to: '',
  variant: 'primary'
};

export default LinkButton;
