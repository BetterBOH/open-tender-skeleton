import React from 'react';
import { AddressCard } from 'components';

const GeocoderResultsListItem = React.memo(({ option, onSelect }) => (
  <li className="GeocoderResultsListItem list-style-none bg-color-white border-color-gray-light">
    <AddressCard feature={option} onClick={() => onSelect(option.value)} />
  </li>
));

export default GeocoderResultsListItem;
