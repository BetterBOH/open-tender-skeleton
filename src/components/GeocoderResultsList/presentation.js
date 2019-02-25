import React from 'react';
import { GeocoderResultsListItem } from 'components';

const GeocoderResultsList = React.memo(({ options }) => {
  if (!options.length) return null;

  return (
    <ul className="GeocoderResultsList relative z-1 shadow-sm">
      {options.map(option => (
        <GeocoderResultsListItem option={option} />
      ))}
    </ul>
  );
});

export default GeocoderResultsList;
