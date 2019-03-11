import React from 'react';
import { storiesOf } from '@storybook/react';

import { order } from 'constants/Mocks';

import { RecentOrders } from 'components';
import documentation from 'components/RecentOrders/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('RecentOrders', module)
  .add(
    'default with orders',
    () => (
      <div className="col-12 md:col-5 lg:col-4">
        <RecentOrders orders={Array(9).fill(order)} />
      </div>
    ),
    addons
  )
  .add(
    'default with 1 order',
    () => (
      <div className="col-12 md:col-5 lg:col-4">
        <RecentOrders orders={Array(1).fill(order)} />
      </div>
    ),
    addons
  )
  .add(
    'default with no orders',
    () => (
      <div className="col-12 md:col-5 lg:col-4">
        <RecentOrders />
      </div>
    ),
    addons
  );
