import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import OrderRating from 'components/OrderRating';
import documentation from 'components/OrderRating/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('OrderRating', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <OrderRating />
      </React.Suspense>
    ),
    addons
  );
