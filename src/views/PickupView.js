import React, { PureComponent } from 'react';
import { Constants } from 'brandibble-redux';
import get from 'utils/get';

import { LocationsSuggestionsCard } from 'components';

const { PICKUP } = Constants.ServiceTypes;

class PickupView extends PureComponent {
  render() {
    const { orderRef, selectedGeocoderFeature } = this.props;

    return (
      <main className="PickupView__container container relative flex flex-col justify-start md:pt4 md:flex-row">
        <div className="col-12 md:col-6 lg:col-4 md:ml4 p1">
          <LocationsSuggestionsCard
            serviceType={get(orderRef, 'serviceType', PICKUP)}
            selectedGeocoderFeature={selectedGeocoderFeature}
          />
        </div>
      </main>
    );
  }
}

export default PickupView;
