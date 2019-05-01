import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import linkIsExternal from 'utils/linkIsExternal';

import get from 'utils/get';

const Button = React.memo(props =>
  RegistryLoader(
    {
      ...props,
      linkIsExternal: get(props, 'to') && linkIsExternal(get(props, 'to'))
    },
    'components.Button',
    () => import('./presentation.js')
  )
);

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  text: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
  anchorTitle: PropTypes.string,
  isDisabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  tabIndex: PropTypes.string
};

Button.defaultProps = {
  className: '',
  variant: 'no-style',
  children: null,
  text: '',
  onClick: f => f,
  to: null,
  type: 'button',
  ariaLabel: '',
  anchorTitle: '',
  isDisabled: false,
  disabledClassName: 'disabled',
  tabIndex: null
};

export default Button;
