import React from 'react';
import { storiesOf } from '@storybook/react';

import { OrderTotals } from 'components';
import documentation from 'components/OrderTotals/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

const mockData = {
  subtotalWithTax: 14.2,
  rewards: -5.0,
  total: 9.2
};

storiesOf('OrderTotals', module).add(
  'default',
  () => (
    <div className="md:flex md:justify-center md:mx1">
      <OrderTotals data={mockData} />
    </div>
  ),
  addons
);
