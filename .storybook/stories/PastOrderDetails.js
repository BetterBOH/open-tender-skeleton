import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { LocalesContext, localesRegistry } from '../mockConfig';
import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import PastOrderDetails from 'components/PastOrderDetails';
import documentation from 'components/PastOrderDetails/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// remove after clean up mocks branch has been merged
const order = {
  address: {
    city: 'New York',
    customer_address_id: 158082,
    formatted_address: '150 E 52nd St, New York, NY 10022, USA',
    in_delivery_zone: true,
    latitude: 40.7571765,
    longitude: -73.9707321,
    state_code: 'NY',
    street_address: '150 East 52nd Street',
    unit: '1001',
    zip_code: '10022'
  },
  credit_card: {
    card_type: 'Visa',
    customer_card_id: 74043,
    last4: '1443',
    masked: '47XXXXXXXXXX1443'
  },
  discount: 0.0,
  items: [
    {
      id: 3733,
      instructions: '',
      made_for: '',
      name: 'Counter Culture Coffee Box',
      option_groups: [
        {
          id: 41,
          option_items: [
            {
              id: 7826,
              name: 'Small (serves 8)',
              price: 25.0
            }
          ]
        },
        {
          id: 42,
          option_items: [
            {
              id: 7830,
              name: 'Skim Milk',
              price: 0.0
            },
            {
              id: 7832,
              name: 'Cashew Milk',
              price: 0.0
            }
          ]
        }
      ],
      price: 0.0,
      quantity: 1,
      total_price: 25.0
    }
  ],
  location_id: 10,
  location_name: 'New York Catering',
  order_type: 'catering',
  order_type_str: 'Catering',
  orders_id: 1219557,
  payment_type: 'credit',
  payment_type_str: 'Credit',
  phone: '2028343641',
  refund: 0.0,
  requested_date: '3/8/2017',
  requested_time: '12:15AM - 12:45AM',
  service_type: 'delivery',
  service_type_str: 'Delivery',
  shipping: 0.0,
  status: 'open',
  submitted_date: '2/27/2017',
  submitted_time: '3:26 PM',
  subtotal: 25.0,
  surcharge: 0.0,
  tax: 2.22,
  timezone: 'US/Eastern',
  tip: 1.0,
  total: 28.22
};

storiesOf('PastOrderDetails', module)
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
          <div className="col-12 md:col-5 lg:col-4">
            <BrandStyle brand={brand} />
            <PastOrderDetails order={order} {...context} />
          </div>
        )}
      </LocalesContext.Consumer>
    ),
    addons
  );
