import React from 'react';
import { storiesOf } from '@storybook/react';

import { OrderSubtotal } from 'components';
import documentation from 'components/OrderSubtotal/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('OrderSubtotal', module).add(
  'default',
  () => (
    <div className="col-12 md:col-6 lg:col-3">
      <OrderSubtotal subtotal={14.2} />
    </div>
  ),
  addons
);
