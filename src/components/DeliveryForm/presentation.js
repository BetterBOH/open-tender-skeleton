import React from 'react';
import { Constants, Status } from 'brandibble-redux';

import {
  Card,
  Text,
  MapboxGeocoder,
  Button,
  TextField,
  Spinner,
  ConfirmButtons,
  AddressCard
} from 'components';

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
    onSubmit
  } = props;
  const { Language } = localesContext;
  const fetchGeolocationsIsPending = fetchGeolocationsStatus === Status.PENDING;

  if (currentStage === Stages.ENTER_ADDRESS) {
    return (
      <Card
        variant="locations"
        className="DeliveryForm bg-color-white flex-nowrap text-center p1 py2"
      >
        <Text size="headline" className="mx1">
          {Language.t('delivery.enterYourAddressHeader')}
        </Text>
        <Text size="description" className="color-gray-dark mt1">
          {Language.t('delivery.enterYourAddressDescription')}
        </Text>
        <MapboxGeocoder
          className="mt2"
          askForBrowserLocation={false}
          initialQuery={get(selectedGeocoderFeature, 'label')}
          selectedServiceType={Constants.ServiceTypes.DELIVERY}
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
        <AddressCard address={address} />
        {/* <div className="col-12 flex flex-col items-start">
          <Text size="large" className="color-gray-dark">
            {address.street_address}
          </Text>
          <Text size="large" className="color-gray-dark mt_5">
            {`${address.city}, ${address.state_code}, ${address.zip_code}`}
          </Text>
        </div> */}
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
          handleConfirm={() => onSubmit(address)}
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
