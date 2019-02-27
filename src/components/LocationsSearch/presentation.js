import React from 'react';
import { LocationCard, MapboxGeocoder } from 'components';

const LocationsSearch = React.memo(
  ({ selectedGeocoderFeature, geolocations, localesContext }) => {
    const { Language } = localesContext;

    return (
      <div className="LocationsSearch col-12 md:col-5 lg:col-3 bg-color-gray-light">
        <div className="LocationsSearch__geocoder p1">
          <MapboxGeocoder />
        </div>
        <div className="LocationsSearch__locations">
          <div className="flex flex-column p1">
            {selectedGeocoderFeature ? (
              <div className="overflow-scroll">
                {!!geolocations.length &&
                  geolocations.map(geolocation => (
                    <div className="mb1">
                      <LocationCard location={geolocation} />
                    </div>
                  ))}
              </div>
            ) : (
              <div>
                <Text size="headline">
                  {Language.t('locations.startSearch')}
                </Text>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default LocationsSearch;
