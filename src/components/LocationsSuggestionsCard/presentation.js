import React from 'react';

import { Card, Text, MapboxGeocoder } from 'components';

const LocationsSuggestionsCard = React.memo(props => {
  const { serviceTypeIsPickup, localesContext } = props;
  const { Language } = localesContext;

  return (
    <Card className="LocationsSuggestionsCard flex-nowrap text-center p1 py2">
      {serviceTypeIsPickup && (
        <Text
          size="extrasmall"
          className="color-gray-dark text-semibold uppercase mb1"
        >
          {Language.t('locations.pickupAdlib')}
        </Text>
      )}
      <Text size="headline" className="mx1">
        {Language.t('locations.whereAreYou')}
      </Text>
      <Text size="description" className="color-gray-dark mt1_5">
        {Language.t('locations.startSearchMobile')}
      </Text>
      <MapboxGeocoder className="mt1_5" />
    </Card>
  );
});

export default LocationsSuggestionsCard;
