import React from 'react';

import RegistryLoader from 'lib/RegistryLoader';

const LocationsSearchGeocoder = React.memo(props =>
  RegistryLoader(props, 'components.LocationsSearchGeocoder', () =>
    import('./presentation.js')
  )
);

export default LocationsSearchGeocoder;
