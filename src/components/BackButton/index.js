import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const BackButton = React.memo(({ className, onClick, icon }) =>
  RegistryLoader({ className, onClick, icon }, 'components.BackButton', () =>
    import('./presentation.js')
  )
);

BackButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string
};

BackButton.defaultProps = {
  className: '',
  onClick: f => f,
  icon: 'Back'
};

export default BackButton;
