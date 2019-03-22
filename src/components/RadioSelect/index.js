import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const RadioSelect = React.memo(props =>
  RegistryLoader(props, 'components.RadioSelect', () =>
    import('./presentation.js')
  )
);

RadioSelect.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  text: PropTypes.string,
  labelBold: PropTypes.string,
  labelRegular: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

RadioSelect.defaultProps = {
  className: '',
  imageUrl: '',
  text: '',
  labelBold: '',
  labelRegular: '',
  isSelected: false,
  onClick: f => f
};

export default RadioSelect;
