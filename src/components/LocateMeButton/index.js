import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';

const LocateMeButton = React.memo(props =>
  RegistryLoader(props, 'components.LocateMeButton', () =>
    import('./presentation.js')
  )
);

LocateMeButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

LocateMeButton.defaultProps = {
  className: '',
  onClick: f => f
};

export default withLocales(LocateMeButton);
