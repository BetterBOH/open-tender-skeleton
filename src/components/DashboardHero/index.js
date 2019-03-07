import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import withLocales from 'lib/withLocales';

const DashboardHero = React.memo(props =>
  RegistryLoader(props, 'components.DashboardHero', () =>
    import('./presentation.js')
  )
);

DashboardHero.propTypes = {
  customerFirstName: PropTypes.string,
  heroImageUrl: PropTypes.string
};

DashboardHero.defaultProps = {
  customerFirstName: '',
  heroImageUrl: ''
};

export { DashboardHero };
export default withLocales(DashboardHero);
