import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const Checkbox = React.memo(props =>
  RegistryLoader(props, 'components.Checkbox', () =>
    import('./presentation.js')
  )
);

Checkbox.propTypes = {
  className: PropTypes.string,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func
};

Checkbox.defaultProps = {
  className: '',
  isChecked: false,
  onClick: f => f
};

export default Checkbox;
