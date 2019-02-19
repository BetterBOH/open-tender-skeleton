import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import get from 'utils/get';
import { defaultConfig } from 'config';

const grayLight = get(defaultConfig, "brand.colors['gray-light']");

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
  variant: PropTypes.string
};

LinkButton.defaultProps = {
  arrow: true,
  className: '',
  children: null,
  iconLeft: null,
  iconLeftFill: grayLight,
  iconRight: 'Right',
  iconRightFill: grayLight,
  onClick: f => f,
  text: '',
  to: '',
  variant: 'primary'
};

export default LinkButton;
