import React from 'react';
import { GeocoderResultsListItem } from 'components';

const GeocoderResultsList = React.memo(({ options, onSelect }) => {
  if (!options.length) return null;

  return (
    <ul className="GeocoderResultsList w100 absolute z-1 shadow-sm">
      {options.map(option => {
        return (
          <GeocoderResultsListItem
            key={option.id}
            option={option}
            onSelect={onSelect}
          />
        );
      })}
    </ul>
  );
});

export default GeocoderResultsList;
