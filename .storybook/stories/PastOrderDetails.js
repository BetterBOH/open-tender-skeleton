import React from 'react';
import { storiesOf } from '@storybook/react';

import { order } from 'constants/Mocks';

import { PastOrderDetails } from 'components';
import documentation from 'components/PastOrderDetails/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('PastOrderDetails', module).add(
  'default',
  () => (
    <div className="col-12 md:col-5 lg:col-4">
      <PastOrderDetails order={order} />
    </div>
  ),
  addons
);
