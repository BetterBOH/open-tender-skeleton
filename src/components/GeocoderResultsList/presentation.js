import React from 'react';
import { Icon, Text, Button } from 'components';

const GeocoderResultsList = React.memo(({ options, onSelect }) => {
  if (!options.length) return null;

  return (
    <ul className="GeocoderResultsList w100 absolute z-1 shadow-sm">
      {options.map(option => {
        const { meta } = option;

        return (
          <li className="GeocoderResultsListItem list-style-none bg-color-white border-color-gray-light">
            <Button
              variant="no-style"
              className="flex flex-wrap w100"
              onClick={() => onSelect(option.value)}
            >
              <div className="col-2 p1">
                <Icon icon="Marker" />
              </div>
              <div className="col-10 py1 pr1">
                <Text size="detail" className="text-semibold block mb_25">
                  {meta.address && `${meta.address} `}
                  {meta.street}
                </Text>
                <Text size="detail" className="color-gray-dark">
                  {meta.city}, {meta.state}, {meta.country}
                </Text>
              </div>
            </Button>
          </li>
        );
      })}
    </ul>
  );
});

export default GeocoderResultsList;
