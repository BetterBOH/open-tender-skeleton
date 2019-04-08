import React from 'react';
import cx from 'classnames';

import { MapboxMap, MapboxMapUserMarker } from 'components';

const LocationsMap = React.memo(
  ({
    mapbox,
    featureCollection,
    geolocations,
    selectedLocation,
    filteredOutLocations
  }) => (
    <div
      className={cx(
        'LocationsMap col-12 md:col-7 md:order-2 lg:col-9 bg-color-white relative',
        {
          // TO-DO: The "absolute" class is added as a workaround for MapboxMap not resizing after initial load, will fix in #274
          hidden: !geolocations
        }
      )}
    >
      <MapboxMap
        className="w100"
        mapboxApiKey={mapbox.mapboxApiKey}
        mapboxStyleUrl={mapbox.mapboxStyleUrl}
        icons={mapbox.icons}
        featureCollection={featureCollection}
        collections={[
          // TO-DO: Despite it not being part of the default designs, we should make redux for selecting locations
          {
            name: 'Selected',
            filter: {
              ids: selectedLocation ? [selectedLocation] : []
            },
            icon: 'selected-location-icon'
          },
          {
            name: 'Restaurants',
            filter: {
              ids: geolocations
                .filter(
                  geolocation =>
                    geolocation.location_id.toString() !== selectedLocation
                )
                .map(geolocation => geolocation.location_id.toString())
            },
            icon: 'location-icon'
          },
          {
            name: 'HiddenByFilter',
            filter: {
              ids: filteredOutLocations
            },
            visible: false
          }
        ]}
        userMarker={MapboxMapUserMarker}
      />
    </div>
  )
);

export default LocationsMap;
