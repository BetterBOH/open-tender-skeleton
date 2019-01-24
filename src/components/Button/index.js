import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const Button = props => {
  return RegistryLoader(props, 'components.Button', () =>
    import('./presentation.js')
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: '',
  onClick: f => f,
  text: '',
  to: null,
  variant: 'no-style'
};

export default Button;
