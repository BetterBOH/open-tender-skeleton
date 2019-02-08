import React from 'react';
import { Text, Button, SearchableDropdown } from 'components';

const MapboxGeocoder = React.memo(
  ({
    actions,
    selectedGeocoderFeature,
    geocoderResultFeatures,
    query,
    onChange,
    onSelect
  }) => (
    // TO-DO: Add presentation styles
    <div>
      <Text size="body" className="text-bold">
        Mapbox Geocoder
      </Text>
      {selectedGeocoderFeature ? (
        <Text size="details">
          SELECTED: {selectedGeocoderFeature.place_name}
        </Text>
      ) : null}
      <div className="mt1">
        <SearchableDropdown
          onChange={onChange}
          value={query}
          options={geocoderResultFeatures.map(feature => ({
            label: feature.place_name,
            value: feature.id
          }))}
          onSelect={onSelect}
        />
      </div>
    </div>
  )
);

export default MapboxGeocoder;
