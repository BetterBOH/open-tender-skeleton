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
  enabledClassName: PropTypes.string,
  disabledClassName: PropTypes.string,
  isDisabled: PropTypes.bool,
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
  anchorTitle: PropTypes.string,
  tabIndex: PropTypes.string,
  elemRef: PropTypes.func
};

LinkButton.defaultProps = {
  className: '',
  enabledClassName: '',
  disabledClassName: '',
  isDisabled: false,
  variant: 'primary',
  children: null,
  text: null,
  iconLeft: null,
  iconLeftFill: '#616e7c',
  iconRight: 'Right',
  iconRightFill: '#cbd2d9',
  onClick: f => f,
  to: null,
  ariaLabel: '',
  anchorTitle: '',
  tabIndex: null,
  elemRef: null
};

export default LinkButton;
