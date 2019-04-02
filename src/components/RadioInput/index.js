import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

const RadioInput = React.memo(props =>
  RegistryLoader(props, 'components.RadioInput', () =>
    import('./presentation.js')
  )
);

RadioInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool
};

RadioInput.defaultProps = {
  className: '',
  id: '',
  name: '',
  checked: false
};

export default RadioInput;
