import React from 'react';

import {
  Card,
  Text,
  MapboxGeocoder,
  Button,
  TextField,
  Spinner,
  ConfirmButtons
} from 'components';
import { PENDING } from 'constants/Status';
import { Constants } from 'brandibble-redux';
import { Stages } from 'constants/Delivery';
import get from 'utils/get';

const DeliveryForm = React.memo(props => {
  const {
    selectedGeocoderFeature,
    localesContext,
    currentStage,
    address,
    changeAddress,
    fetchGeolocationsStatus,
    setDeliveryFormAddressUnit,
    geolocations,
    submit
  } = props;
  const { Language } = localesContext;
  const fetchGeolocationsIsPending = fetchGeolocationsStatus === PENDING;

  if (currentStage === Stages.ENTER_ADDRESS) {
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
          selectedServiceType={Constants.ServiceTypes.DELIVERY}
          random={'hi'}
        />
      </Card>
    );
  }

  return (
    <Card
      variant="locations"
      className="DeliveryForm bg-color-white flex-nowrap text-center p1 py2"
    >
      <Text size="headline" className="mx1">
        {Language.t('delivery.confirmYourAddressHeader')}
      </Text>
      <Text size="description" className="color-gray-dark mt1">
        {Language.t('delivery.confirmYourAddressDescription')}
      </Text>
      <div className="col-12 flex items-start mt1">
        <div className="col-12 flex flex-col items-start">
          <Text size="large" className="color-gray-dark">
            {address.street_address}
          </Text>
          <Text size="large" className="color-gray-dark mt_5">
            {`${address.city}, ${address.state_code}, ${address.zip_code}`}
          </Text>
        </div>
        <Button onClick={changeAddress}>
          <Text size="description">{Language.t('delivery.change')}</Text>
        </Button>
      </div>
      {!!geolocations.length && (
        <div className="col-12 flex items-start mt1">
          <TextField
            className="mr1"
            variant="primary"
            type="text"
            autoComplete="given-name"
            placeholder={Language.t('delivery.enterYourUnit')}
            value={get(address, 'unit', '')}
            onChange={setDeliveryFormAddressUnit}
          />
        </div>
      )}
      {fetchGeolocationsIsPending && (
        <div className="col-12 flex items-center justify-center mt1_5">
          <Spinner />
          <Text className="color-gray-dark px1">
            {Language.t('delivery.loading')}
          </Text>
        </div>
      )}
      {!fetchGeolocationsIsPending && !geolocations.length && (
        <div className="col-12 flex items-center justify-center mt1_5">
          <Text className="ml_5 color-error">
            {Language.t('delivery.noLocations')}
          </Text>
        </div>
      )}
      <div className="col-12 flex justify-center mt1_5">
        <ConfirmButtons
          handleConfirm={() => submit(address)}
          confirmButtonText={
            fetchGeolocationsIsPending
              ? Language.t('delivery.validatingAddress')
              : Language.t('delivery.confirm')
          }
          confirmButtonIsDisabled={!geolocations.length}
          handleCancel={changeAddress}
          cancelButtonIcon="Back"
        />
      </div>
    </Card>
  );
});

export default DeliveryForm;
