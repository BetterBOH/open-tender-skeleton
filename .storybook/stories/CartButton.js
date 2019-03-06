import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import { CartButton } from 'components';
import documentation from 'components/CartButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('CartButton', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <React.Suspense fallback={<div />}>
      <BrandStyle brand={brand} />
      {story()}
    </React.Suspense>
  ))
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
