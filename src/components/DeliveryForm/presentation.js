import React from 'react';

import {
  Card,
  Text,
  MapboxGeocoder,
  Button,
  TextField,
  Spunner
} from 'components';
import { PICKUP } from 'constants/OpenTender';
import get from 'utils/get';

const DeliveryForm = React.memo(props => {
  const {
    serviceType,
    selectedGeocoderFeature,
    localesContext,
    currentStage,
    address,
    changeAddress,
    setDeliveryFormAddress,
    fetchGeolocationsStatus,
    setDeliveryFormAddressUnit,
    geolocations
  } = props;
  const { Language } = localesContext;
  console.log('geolocations', geolocations);
  console.log('cry', fetchGeolocationsStatus !== 'PENDING');
  console.log('barf', !geolocations.length);
  if (currentStage === 'enterAddress') {
    return (
      <Card
        variant="locations"
        className="DeliveryForm bg-color-white flex-nowrap text-center p1 py2"
      >
        <Text size="headline" className="mx1">
          {Language.t('delivery.enterYourAddressHeader')}
        </Text>
        <Text size="description" className="color-gray-dark mt1_5">
          {Language.t('delivery.enterYourAddressDescription')}
        </Text>
        <MapboxGeocoder
          className="mt1_5"
          askForBrowserLocation={false}
          initialQuery={get(selectedGeocoderFeature, 'label')}
        />
      </Card>
    );
  } else {
    return (
      <Card
        variant="locations"
        className="DeliveryForm bg-color-white flex-nowrap text-center p1 py2"
      >
        <Text size="headline" className="mx1">
          {Language.t('delivery.confirmYourAddressHeader')}
        </Text>

        <Text size="description" className="color-gray-dark mt1_5">
          {Language.t('delivery.confirmYourAddressDescription')}
        </Text>

        <div className="col-12 flex items-start mt1">
          <div className="col-12 flex flex-col items-start">
            <Text size="large" className="color-gray-dark">
              {`${address.address} ${address.street}`}
            </Text>
            <Text size="large" className="color-gray-dark">
              {`${address.city}, ${address.state}, ${address.zip}`}
            </Text>
          </div>

          <Button className="DeliveryForm__border" onClick={changeAddress}>
            Change
          </Button>
        </div>

        <div className="col-12 flex items-start mt1">
          <TextField
            className="mr1"
            variant="primary"
            type="text"
            autoComplete="given-name"
            placeholder={Language.t('delivery.enterYourUnit')}
            value={get(address, 'unit', '')}
            onChange={unit => setDeliveryFormAddressUnit(unit)}
          />
        </div>
        {fetchGeolocationsStatus === 'PENDING' ? (
          <div className="col-12 flex items-center justify-center mt1">
            <Spunner />
          </div>
        ) : null}
        {fetchGeolocationsStatus !== 'PENDING' && !geolocations.length ? (
          <div className="col-12 flex items-center justify-center mt1">
            <Text size="large" className="color-gray-dark">
              Dang we aint got no locations for u dude
            </Text>
          </div>
        ) : null}
      </Card>
    );
  }
});

export default DeliveryForm;
