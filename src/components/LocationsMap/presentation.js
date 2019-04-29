import React from 'react';
import cx from 'classnames';

import { MapboxMap } from 'components';

const LocationsMap = React.memo(
  ({
    mapbox,
    featureCollection,
    geolocations,
    selectedLocation,
    filteredOutLocations,
    userCoordinates
  }) => (
    <div
      className={cx(
        'LocationsMap col-12 md:col-7 md:order-2 lg:col-9 bg-color-white relative',
        {
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
            name: 'User',
            filter: {
              ids: ['user']
            },
            icon: 'user-icon'
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
      />
    </div>
  )
);

export default LocationsMap;
