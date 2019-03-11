import React from 'react';
import { storiesOf } from '@storybook/react';

import { order } from 'constants/Mocks';

import { PastOrderCard } from 'components';
import documentation from 'components/PastOrderCard/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('PastOrderCard', module).add(
  'default',
  () => (
    <div className="col-12 md:col-5 lg:col-4">
      <PastOrderCard order={order} />
    </div>
  ),
  addons
);
