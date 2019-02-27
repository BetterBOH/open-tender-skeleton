import React from 'react';
import { LocationCard, MapboxGeocoder, Text } from 'components';

const LocationsSearch = React.memo(
  ({ selectedGeocoderFeature, geolocations, onSelect, localesContext }) => {
    const { Language } = localesContext;

    return (
      <div className="LocationsSearch col-12 md:col-5 lg:col-3 bg-color-gray-light">
        <div className="LocationsSearch__geocoder px1 py1_5 shadow-sm z-1 relative">
          <MapboxGeocoder />
        </div>
        <div className="LocationsSearch__locations h100">
          <div className="flex flex-column h100 text-center">
            {selectedGeocoderFeature ? (
              <div className="w100 overflow-y-scroll px1">
                {!!geolocations.length ? (
                  <React.Fragment>
                    <Text size="headline" className="block my2">
                      <span className="color-brand-color-light pr_5">
                        {geolocations.length}
                      </span>
                      <span>{Language.t('locations.searchResults')}</span>
                    </Text>
                    {geolocations.map(geolocation => (
                      <div className="mb1" key={geolocation.location_id}>
                        <LocationCard
                          location={geolocation}
                          onOrderClick={() => onSelect(geolocation)}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ) : (
                  <Text size="body">
                    {Language.t('locations.noSearchResults')}
                  </Text>
                )}
              </div>
            ) : (
              <Text size="body" className="px1 py2">
                {Language.t('locations.startSearch')}
              </Text>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default LocationsSearch;
