import React from 'react';
import { storiesOf } from '@storybook/react';

import { orderData, location, customer } from 'constants/Mocks';

import { OrderSummary } from 'components';
import documentation from 'components/OrderSummary/README.md';
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

storiesOf('OrderSummary', module).add(
  'default',
  () => (
    <div className="col-12 md:col-5 lg:col-4">
      <OrderSummary orderSummaryData={orderSummaryData} />
    </div>
  ),
  addons
);
