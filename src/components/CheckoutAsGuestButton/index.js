import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';

const CheckoutAsGuestButton = React.memo(props =>
  RegistryLoader(props, 'components.CheckoutAsGuestButton', () =>
    import('./presentation.js')
  )
);

CheckoutAsGuestButton.propTypes = {
  className: PropTypes.string
};

CheckoutAsGuestButton.defaultProps = {
  className: ''
};

export default withLocales(CheckoutAsGuestButton);
