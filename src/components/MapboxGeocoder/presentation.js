import React, { Component } from 'react';
import { Text, Button } from 'components';

const MapboxGeocoder = React.memo(
  ({
    actions,
    selectedGeocoderFeature,
    geocoderResultFeatures,
    query,
    handleOnChange
  }) => (
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
        <input type="text" onChange={handleOnChange} value={query} />
      </div>
      {geocoderResultFeatures.length ? (
        <div className="mb1">
          {geocoderResultFeatures.map(feature => (
            <Button
              key={feature.id}
              onClick={() => actions.selectGeocoderFeature(feature)}
            >
              {feature.place_name}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  )
);

export default MapboxGeocoder;
