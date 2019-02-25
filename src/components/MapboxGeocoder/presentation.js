import React from 'react';
import {
  Text,
  Button,
  SearchableDropdown,
  GeocoderResultsList
} from 'components';

const MapboxGeocoder = React.memo(
  ({
    actions,
    selectedGeocoderFeature,
    geocoderResultFeatures,
    query,
    onChange,
    onSelect
  }) => {
    const features = geocoderResultFeatures.map(feature => ({
      label: feature.place_name,
      value: feature.id,
      feature
    }));

    return (
      <div>
        {/* <Text size="body" className="text-bold">
          Mapbox Geocoder
        </Text>
        {selectedGeocoderFeature ? (
          <Text size="details">
            SELECTED: {selectedGeocoderFeature.place_name}
          </Text> 
        ) : null} */}
        <SearchableDropdown
          className="shadow-sm bg-color-white"
          onChange={onChange}
          value={query}
          options={features}
          placeholder="110 Bowery, Manhattan, NY"
          onSelect={onSelect}
          resultsIcon="Marker"
          renderOptions={false}
        />
        {!!features.length && <GeocoderResultsList options={features} />}
      </div>
    );
  }
);

export default MapboxGeocoder;
