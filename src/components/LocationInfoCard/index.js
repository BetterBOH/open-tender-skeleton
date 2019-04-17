import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import LocationModel from 'constants/Models/LocationModel';

const LocationInfoCard = React.memo(props =>
  RegistryLoader(props, 'components.LocationInfoCard', () =>
    import('./presentation.js')
  )
);

LocationInfoCard.propTypes = {
  location: LocationModel.propTypes,
  className: PropTypes.string
};

LocationInfoCard.defaultProps = {
  location: LocationModel.defaultProps,
  className: ''
};

export default LocationInfoCard;
