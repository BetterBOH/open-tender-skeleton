import React from 'react';

import { Card, Text, MapboxGeocoder } from 'components';
import { PICKUP } from 'constants/OpenTender';

const LocationsSuggestionsCard = React.memo(props => {
  const { serviceType, localesContext, errors } = props;
  const { Language } = localesContext;

  return (
    <Card className="LocationsSuggestionsCard flex-nowrap text-center p1 py2">
      {serviceType === PICKUP && (
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
      <Text size="description" className="md:none color-gray-dark mt1_5">
        {Language.t('locations.startSearchMobile')}
      </Text>
      <Text
        size="description"
        className="none md:inline-block color-gray-dark mt1_5"
      >
        {Language.t('locations.startSearchDesktop')}
      </Text>
      <MapboxGeocoder
        className="mt1_5"
        askForBrowserLocation={serviceType === PICKUP}
      />
    </Card>
  );
});

export default LocationsSuggestionsCard;
