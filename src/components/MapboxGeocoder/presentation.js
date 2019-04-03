import React from 'react';
import cx from 'classnames';
import { SearchableDropdown, GeocoderResultsList } from 'components';

import get from 'utils/get';

const MapboxGeocoder = React.memo(
  ({
    className,
    selectedGeocoderFeature,
    geocoderResultFeatures,
    query,
    onChange,
    onSelect
  }) => {
    const selectedLabel = get(selectedGeocoderFeature, 'label', '');

    return (
      <div className={cx('MapboxGeocoder relative', className)}>
        <SearchableDropdown
          className="shadow-sm bg-color-white"
          onChange={onChange}
          value={selectedLabel || query}
          options={geocoderResultFeatures}
          placeholder="110 Bowery, Manhattan, NY"
          onSelect={onSelect}
          renderOptions={false}
        />
        {!selectedGeocoderFeature && (
          <GeocoderResultsList
            onSelect={onSelect}
            options={geocoderResultFeatures}
          />
        )}
      </div>
    );
  }
);

export default MapboxGeocoder;
