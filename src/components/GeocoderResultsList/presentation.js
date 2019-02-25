import React from 'react';
import { GeocoderResultsListItem } from 'components';

const GeocoderResultsList = React.memo(({ options, onSelect }) => {
  if (!options.length) return null;

  return (
    <ul className="GeocoderResultsList relative z-1 shadow-sm">
      {options.map(option => (
        <GeocoderResultsListItem
          key={option.label}
          option={option}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
});

export default GeocoderResultsList;
