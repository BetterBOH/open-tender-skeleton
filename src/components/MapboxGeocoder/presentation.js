import React from 'react';
<<<<<<< HEAD
import cx from 'classnames';
import { SearchableDropdown, GeocoderResultsList } from 'components';
=======
import {
  SearchableDropdown,
  LocateMeButton,
  GeocoderResultsList
} from 'components';
>>>>>>> Add LocateMeButton and show in MapboxGeocoder when there isn't a value in the SearchableDropdown

import get from 'utils/get';

const MapboxGeocoder = React.memo(
  ({
    className,
    selectedGeocoderFeature,
    geocoderResultFeatures,
    query,
    onChange,
    onSelect,
    geolocateUser
  }) => {
    const selectedLabel = get(selectedGeocoderFeature, 'label', '');
    const value = selectedLabel || query;

    return (
      <div className={cx('MapboxGeocoder relative', className)}>
        <SearchableDropdown
          className="shadow-sm bg-color-white"
          onChange={onChange}
          value={value}
          options={geocoderResultFeatures}
          placeholder="110 Bowery, Manhattan, NY"
          onSelect={onSelect}
          renderOptions={false}
        />
        {!value && (
          <LocateMeButton
            className="SearchableDropdown__locate-me-button r0 m_5"
            onClick={geolocateUser}
          />
        )}
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
