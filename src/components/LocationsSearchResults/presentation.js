import React from 'react';
import { LocationCard, Text } from 'components';

const LocationsSearchResults = React.memo(
  ({ geolocations, localesContext, onSelect }) => {
    const { Language } = localesContext;

    return (
      <div className="LocationsSearchResults flex flex-column text-center bg-color-gray-lighter">
        <div className="w100 overflow-y-scroll px1 md:px1_5">
          {!!geolocations.length ? (
            <React.Fragment>
              <Text size="headline" className="block my2">
                <span className="color-brand-color-light pr_5">
                  {geolocations.length}
                </span>
                <span>{Language.t('locations.searchResults')}</span>
              </Text>
              {geolocations.map(geolocation => (
                <div className="mb1 md:mb1_5" key={geolocation.location_id}>
                  <LocationCard
                    location={geolocation}
                    onOrderClick={() => onSelect(geolocation)}
                  />
                </div>
              ))}
            </React.Fragment>
          ) : (
            <Text size="body">{Language.t('locations.noSearchResults')}</Text>
          )}
        </div>
      </div>
    );
  }
);

export default LocationsSearchResults;
