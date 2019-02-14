import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import linkIsExternal from 'utils/linkIsExternal';

import get from 'utils/get';

const Button = props => {
  return RegistryLoader(
    {
      ...props,
      linkIsExternal: get(props, 'to') && linkIsExternal(get(props, 'to'))
    },
    'components.Button',
    () => import('./presentation.js')
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
  type: PropTypes.string,
  variant: PropTypes.string,
  disabledClassName: PropTypes.string,
  isDisabled: PropTypes.bool
};

Button.defaultProps = {
  children: null,
  className: '',
  onClick: f => f,
  text: '',
  to: null,
  type: 'button',
  variant: 'no-style',
  disabledClassName: 'disabled',
  isDisabled: false
};

export default Button;
