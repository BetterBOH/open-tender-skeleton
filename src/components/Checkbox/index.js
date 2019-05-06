import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const Checkbox = React.memo(props =>
  RegistryLoader(props, 'components.Checkbox', () =>
    import('./presentation.js')
  )
);

Checkbox.propTypes = {
  loading: PropTypes.bool,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string
};

Checkbox.defaultProps = {
  loading: false,
  isChecked: false,
  onClick: f => f,
  label: '',
  id: 'checkbox-1'
};

export default Checkbox;
