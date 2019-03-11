import React from 'react';
import { storiesOf } from '@storybook/react';

import { CartButton } from 'components';
import documentation from 'components/CartButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('CartButton', module)
  .add(
    'default (no items)',
    () => (
      <div className="m1">
        <CartButton />
      </div>
    ),
    addons
  )
  .add(
    '2 items in cart',
    () => (
      <div className="m1">
        <CartButton quantity={2} />
      </div>
    ),
    addons
  );
