import React, { PureComponent } from 'react';
import get from 'utils/get';
import { PICKUP } from 'constants/OpenTender';

import { LocationsSuggestionsCard } from 'components';

class PickupView extends PureComponent {
  render() {
    const { orderRef } = this.props;

    return (
      <main className="PickupView__container container relative flex flex-col justify-center items-center md:flex-row md:justify-start">
        <div className="col-12 md:col-6 lg:col-4 md:ml4 p1">
          <div className="relative overflow-auto my2">
            <LocationsSuggestionsCard
              serviceType={get(orderRef, 'serviceType', PICKUP)}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default PickupView;
