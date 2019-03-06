import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { orderData, location, customer, lineItemsData } from 'constants/Mocks';
import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { DashboardOrderSummary } from 'components/DashboardOrderSummary';
import documentation from 'components/DashboardOrderSummary/README.md';
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

storiesOf('DashboardOrderSummary', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>
      <LocalesContext.Provider value={localesRegistry}>
        <BrandStyle brand={brand} />
        {story()}
      </LocalesContext.Provider>
    </React.Suspense>
  ))
  .add(
    'default with no items in cart',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <div className="col-12 md:col-8 lg:col-6">
            <DashboardOrderSummary
              orderSummaryData={orderSummaryData}
              localesContext={context}
            />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  )
  .add(
    'default with 2 items in cart',
    () => (
      <LocalesContext.Consumer>
        {context => (
          <div className="col-12 md:col-8 lg:col-6">
            <DashboardOrderSummary
              orderSummaryData={orderSummaryData}
              lineItemsData={lineItemsData}
              localesContext={context}
            />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
