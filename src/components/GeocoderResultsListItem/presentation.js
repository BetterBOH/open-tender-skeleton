import React from 'react';

console.log('zonggg');

const GeocoderResultsListItem = React.memo(({ option }) => {
  console.log('opt');
  return <div>{option.label}</div>;
});

export default GeocoderResultsListItem;
