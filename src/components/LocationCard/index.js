import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import LocationModel from 'constants/Models/LocationModel';
import withLocales from 'lib/withLocales';

const LocationCard = React.memo(props =>
  RegistryLoader(props, 'components.LocationCard', () =>
    import('./presentation.js')
  )
);

LocationCard.propTypes = {
  location: LocationModel.propTypes
};

LocationCard.defaultProps = {
  location: LocationModel.defaultProps
};

export default withLocales(LocationCard);
