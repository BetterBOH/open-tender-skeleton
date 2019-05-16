import React from 'react';
import cx from 'classnames';

import { Status } from 'brandibble-redux';

import {
  SearchableDropdown,
  LocateMeButton,
  GeocoderResultsList
} from 'components';
import get from 'utils/get';

const MapboxGeocoder = React.memo(
  ({
    className,
    selectedGeocoderFeature,
    geocoderResultFeatures,
    query,
    onChange,
    onSelect,
    actions,
    fetchCurrentPositionStatus,
    fetchCurrentPositionError,
    askForBrowserLocation
  }) => {
    const { fetchCurrentPosition } = actions;
    const selectedLabel = get(selectedGeocoderFeature, 'label', '');
    const value = selectedLabel || query;

    return (
      <div className={cx('MapboxGeocoder relative', className)}>
        <SearchableDropdown
          className="bg-color-white"
          onChange={onChange}
          value={value}
          options={geocoderResultFeatures}
          placeholder="110 Bowery, Manhattan, NY"
          onSelect={onSelect}
          renderOptions={false}
          errors={
            fetchCurrentPositionError ? [fetchCurrentPositionError] : null
          }
        />
        {!value && askForBrowserLocation && (
          <LocateMeButton
            className="SearchableDropdown__locate-me-button r0 m_5"
            onClick={fetchCurrentPosition}
            showLoading={fetchCurrentPositionStatus === Status.PENDING}
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
