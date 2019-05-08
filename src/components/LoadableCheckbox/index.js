import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const LoadableCheckbox = React.memo(props => {
  const { isLoading, isChecked, onClick, label, id } = props;

  return RegistryLoader(
    { isLoading, isChecked, onClick, label, id },
    'components.LoadableCheckbox',
    () => import('./presentation.js')
  );
});

LoadableCheckbox.propTypes = {
  isLoading: PropTypes.bool,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string
};

LoadableCheckbox.defaultProps = {
  isLoading: false,
  isChecked: false,
  onClick: f => f,
  label: '',
  id: 'checkbox-1'
};

export default LoadableCheckbox;
