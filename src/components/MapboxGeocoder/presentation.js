import React from 'react';
import cx from 'classnames';
import {
  Text,
  SearchableDropdown,
  LocateMeButton,
  GeocoderResultsList
} from 'components';
import { PENDING } from 'constants/Status';
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
          className="shadow-sm bg-color-white"
          onChange={onChange}
          value={value}
          options={geocoderResultFeatures}
          placeholder="110 Bowery, Manhattan, NY"
          onSelect={onSelect}
          renderOptions={false}
        />
        {!value && askForBrowserLocation && (
          <LocateMeButton
            className="SearchableDropdown__locate-me-button r0 m_5"
            onClick={fetchCurrentPosition}
            showLoading={fetchCurrentPositionStatus === PENDING}
          />
        )}
        {!!fetchCurrentPositionError && (
          <div className="GeolocationStatus text-center mt_25">
            <Text size="description">{fetchCurrentPositionError}</Text>
          </div>
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
