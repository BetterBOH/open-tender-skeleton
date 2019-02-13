import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import QuantitySpinner from 'components/QuantitySpinner';
import documentation from 'components/QuantitySpinner/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('QuantitySpinner', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <BrandStyle brand={brand} />
        <QuantitySpinner />
      </React.Suspense>
    ),
    addons
  );
