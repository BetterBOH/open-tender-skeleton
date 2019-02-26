import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import LocationModel from 'constants/Models/LocationModel';
import withLocales from 'lib/withLocales';

const LocationInfoCard = React.memo(props =>
  RegistryLoader(props, 'components.LocationInfoCard', () =>
    import('./presentation.js')
  )
);

LocationInfoCard.propTypes = {
  location: LocationModel.propTypes
};

LocationInfoCard.defaultProps = {
  location: LocationModel.defaultProps
};

export { LocationInfoCard };
export default withLocales(LocationInfoCard);
