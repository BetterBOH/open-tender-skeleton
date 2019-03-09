import React from 'react';
import { storiesOf } from '@storybook/react';

import { order } from 'constants/Mocks';

import { PastOrdersIndex } from 'components';
import documentation from 'components/PastOrdersIndex/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('PastOrdersIndex', module)
  .add(
    'default with orders',
    () => (
      <div className="col-12 md:col-5 lg:col-4">
        <PastOrdersIndex orders={Array(3).fill(order)} />
      </div>
    ),
    addons
  )
  .add(
    'default with 1 order',
    () => (
      <div className="col-12 md:col-5 lg:col-4">
        <PastOrdersIndex orders={[order]} />
      </div>
    ),
    addons
  )
  .add(
    'default with no orders',
    () => (
      <div className="col-12 md:col-5 lg:col-4">
        <PastOrdersIndex />
      </div>
    ),
    addons
  );
