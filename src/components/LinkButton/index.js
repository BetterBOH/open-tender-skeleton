import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const LinkButton = React.memo(props =>
  RegistryLoader(props, 'components.LinkButton', () =>
    import('./presentation.js')
  )
);

LinkButton.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  text: PropTypes.string,
  iconLeft: PropTypes.string,
  iconLeftFill: PropTypes.string,
  iconRight: PropTypes.string,
  iconRightFill: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  ariaLabel: PropTypes.string,
  anchorTitle: PropTypes.string
};

LinkButton.defaultProps = {
  className: '',
  variant: 'primary',
  children: null,
  text: null,
  iconLeft: null,
  iconLeftFill: '#8d92a3',
  iconRight: 'Right',
  iconRightFill: '#8d92a3',
  onClick: f => f,
  to: null,
  ariaLabel: '',
  anchorTitle: ''
};

export default LinkButton;
