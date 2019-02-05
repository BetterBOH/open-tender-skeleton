import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import Colors from 'constants/Colors.js';

const LinkButton = props => {
  return RegistryLoader(props, 'components.LinkButton', () =>
    import('./presentation.js')
  );
};

LinkButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  iconLeft: PropTypes.string,
  iconLeftFill: PropTypes.string,
  iconRight: PropTypes.string,
  iconRightFill: PropTypes.string,
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
  iconLeftFill: Colors.LIGHT_GRAY,
  iconRight: 'Right',
  iconRightFill: Colors.LIGHT_GRAY,
  onClick: f => f,
  text: '',
  to: '',
  variant: 'primary'
};

export default LinkButton;
