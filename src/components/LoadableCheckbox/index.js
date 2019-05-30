import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const LoadableCheckbox = React.memo(props => {
  const { id, className, isLoading, isChecked, onClick, label } = props;

  return RegistryLoader(
    { id, className, isLoading, isChecked, onClick, label },
    'components.LoadableCheckbox',
    () => import('./presentation.js')
  );
});

LoadableCheckbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string
};

LoadableCheckbox.defaultProps = {
  id: 'checkbox-1',
  className: '',
  isLoading: false,
  isChecked: false,
  onClick: f => f,
  label: ''
};

export default LoadableCheckbox;
