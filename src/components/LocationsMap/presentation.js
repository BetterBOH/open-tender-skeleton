import React from 'react';
import cx from 'classnames';

import { MapboxMap } from 'components';

const LocationsMap = React.memo(
  ({ mapbox, featureCollection, geolocationsArePresent }) => (
    <div
      className={cx(
        'LocationsMap col-12 md:col-7 md:order-2 lg:col-9 bg-color-white relative',
        {
          // The "absolute" class is added as a workaround for MapboxMap not resizing after initial load, will fix in #274
          'hidden absolute': !geolocationsArePresent
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
