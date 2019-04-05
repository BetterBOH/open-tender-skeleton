import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

const MenuStatus = React.memo(props =>
  RegistryLoader(props, 'components.MenuStatus', () =>
    import('./presentation.js')
  )
);

MenuStatus.propTypes = {
  status: PropTypes.string
};

MenuStatus.defaultProps = {
  status: ''
};

export default MenuStatus;
