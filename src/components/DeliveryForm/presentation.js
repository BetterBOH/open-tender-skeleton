import React from 'react';
import { Constants, Status } from 'brandibble-redux';

import {
  Card,
  Text,
  MapboxGeocoder,
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
        className="DeliveryForm transition-slide-up bg-color-white-wash flex-nowrap text-center py2 px1"
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
      className="DeliveryForm bg-color-white-wash flex-nowrap text-center py2"
    >
      <Text size="headline" className="mx1">
        {Language.t('delivery.confirmYourAddressHeader')}
      </Text>
      <Text size="description" className="color-gray-dark mt1">
        {Language.t('delivery.confirmYourAddressDescription')}
      </Text>
      <div className="col-12 flex items-start mt1 px1">
        <AddressCard
          className="shadow-sm"
          address={address}
          buttonLabel={Language.t('delivery.change')}
          onClick={changeAddress}
        />
      </div>
      {!!geolocations.length && (
        <div className="col-12 flex items-start mt1 px1">
          <TextField
            focusOnMount={true}
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
        <div className="col-12 flex items-center justify-center mt1_5 px1">
          <Spinner />
          <Text className="color-gray-dark px1">
            {Language.t('delivery.loading')}
          </Text>
        </div>
      )}
      {!fetchGeolocationsIsPending && !geolocations.length && (
        <div className="col-12 flex items-center justify-center mt1_5 px1">
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
          confirmButtonIsDisabled={
            !geolocations.length ||
            (!fetchGeolocationsIsPending && !geolocations.length) ||
            fetchGeolocationsIsPending
          }
          handleCancel={changeAddress}
          cancelButtonIcon="Back"
        />
      </div>
    </Card>
  );
});

export default DeliveryForm;
