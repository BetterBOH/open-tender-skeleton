import React, { PureComponent } from 'react';
import get from 'utils/get';
import { Constants } from 'brandibble-redux';

import { DeliveryForm } from 'components';

const { DELIVERY } = Constants.ServiceTypes;

class DeliveryView extends PureComponent {
  render() {
    const {
      orderRef,
      geolocations,
      fetchGeolocationsStatus,
      actions,
      address
    } = this.props;

    return (
      <main className="DeliveryView__container container relative flex flex-col justify-start md:pt4 md:flex-row">
        <div className="col-12 md:col-6 lg:col-4 md:ml4 p1">
          <DeliveryForm
            address={address}
            geolocations={geolocations}
            fetchGeolocationsStatus={fetchGeolocationsStatus}
            serviceType={get(orderRef, 'serviceType', DELIVERY)}
            setDeliveryFormAddress={get(actions, 'setDeliveryFormAddress')}
            setDeliveryFormAddressUnit={get(
              actions,
              'setDeliveryFormAddressUnit'
            )}
            clearDeliveryFormAddress={get(actions, 'clearDeliveryFormAddress')}
            orderRef={orderRef}
            onConfirm={get(actions, 'confirmChangeToDelivery')}
          />
        </div>
      </main>
    );
  }
}

export default DeliveryView;
