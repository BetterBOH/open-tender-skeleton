import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const LoadableCheckbox = React.memo(props =>
  RegistryLoader(props, 'components.LoadableCheckbox', () =>
    import('./presentation.js')
  )
);

LoadableCheckbox.propTypes = {
  loading: PropTypes.bool,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string
};

LoadableCheckbox.defaultProps = {
  loading: false,
  isChecked: false,
  onClick: f => f,
  label: '',
  id: 'checkbox-1'
};

export default LoadableCheckbox;
