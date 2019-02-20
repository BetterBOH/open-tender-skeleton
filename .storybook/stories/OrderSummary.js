import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { orderData, location, customer } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import OrderSummary from 'components/OrderSummary';
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

storiesOf('OrderSummary', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>
      <LocalesContext.Provider value={localesRegistry}>
        {story()}
      </LocalesContext.Provider>
    </React.Suspense>
  ))
  .add(
    'default',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <div className="col-12 md:col-5 lg:col-3">
            <BrandStyle brand={brand} />
            <OrderSummary orderSummaryData={orderSummaryData} {...context} />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
