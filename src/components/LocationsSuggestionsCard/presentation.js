import React, { Fragment } from 'react';

import { Card, Text, LocationsSearchGeocoder } from 'components';

const LocationsSuggestionsCard = React.memo(props => {
  const { geolocations, serviceTypeIsPickup, localesContext } = props;
  const { Language } = localesContext;

  const cardText = (
    <Fragment>
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
    </Fragment>
  );

  return (
    <Card className="LocationsSuggestionsCard flex-nowrap text-center p1 py2">
      {!geolocations.length && cardText}
      <LocationsSearchGeocoder />
    </Card>
  );
});

export default LocationsSuggestionsCard;
