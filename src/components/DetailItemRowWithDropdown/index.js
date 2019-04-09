import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const DetailItemRowWithDropdown = React.memo(props =>
  RegistryLoader(props, 'components.DetailItemRowWithDropdown', () =>
    import('./presentation.js')
  )
);

DetailItemRowWithDropdown.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  dropdownId: PropTypes.string
};

DetailItemRowWithDropdown.defaultProps = {
  label: '',
  icon: '',
  value: '',
  onClick: null,
  dropdownId: null
};

export default DetailItemRowWithDropdown;
