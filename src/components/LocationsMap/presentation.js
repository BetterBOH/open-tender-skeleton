import React from 'react';
import cx from 'classnames';

import { MapboxMap } from 'components';

const LocationsMap = React.memo(
  ({ mapbox, featureCollection, geolocations }) => (
    <div
      className={cx(
        'LocationsMap col-12 md:col-7 md:order-2 lg:col-9 bg-color-white relative',
        {
          'hidden absolute': !geolocations.length
        }
      )}
    >
      <MapboxMap
        className="w100"
        mapboxApiKey={mapbox.mapboxApiKey}
        mapboxStyleUrl={mapbox.mapboxStyleUrl}
        featureCollection={featureCollection}
      />
    </div>
  )
);

export default LocationsMap;
