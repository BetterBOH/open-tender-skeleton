import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const RadioSelectButton = React.memo(props =>
  RegistryLoader(props, 'components.RadioSelectButton', () =>
    import('./presentation.js')
  )
);

RadioSelectButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  labelBold: PropTypes.string,
  labelRegular: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

RadioSelectButton.defaultProps = {
  className: '',
  text: '',
  labelBold: '',
  labelRegular: '',
  children: null,
  isSelected: false,
  onClick: f => f
};

export default RadioSelectButton;
