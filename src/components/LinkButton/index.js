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
  variant: PropTypes.string,
  alt: PropTypes.string
};

LinkButton.defaultProps = {
  className: '',
  children: null,
  iconLeft: null,
  iconLeftFill: '#8d92a3',
  iconRight: 'Right',
  iconRightFill: '#8d92a3',
  onClick: f => f,
  text: null,
  to: null,
  variant: 'primary',
  alt: ''
};

export default LinkButton;
