import React from 'react';
import { storiesOf } from '@storybook/react';

import { orderData, location, customer, lineItemsData } from 'constants/Mocks';

import { CurrentOrderSummary } from 'components';
import documentation from 'components/CurrentOrderSummary/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// mock data
const orderSummaryData = {
  serviceType: orderData.service_type,
  orderTime: orderData.requested_at,
  locationName: location.name,
  locationImage: location.small_image_url,
  customer: customer
};

storiesOf('CurrentOrderSummary', module)
  .add(
    'default with no items in cart',
    () => (
      <div className="col-12 md:col-8 lg:col-6">
        <CurrentOrderSummary orderSummaryData={orderSummaryData} />
      </div>
    ),
    addons
  )
  .add(
    'default with 2 items in cart',
    () => (
      <div className="col-12 md:col-8 lg:col-6">
        <CurrentOrderSummary
          orderSummaryData={orderSummaryData}
          lineItemsData={lineItemsData}
        />
      </div>
    ),
    addons
  );
