import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import Rating from 'components/Rating';
import documentation from 'components/Rating/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Rating', module)
  .addDecorator(checkA11y)
  .add(
    'default (not interactive)',
    () => (
      <React.Suspense fallback={<div />}>
        <Rating rating={3} />
      </React.Suspense>
    ),
    addons
  )
  .add(
    'interactive',
    () => (
      <React.Suspense fallback={<div />}>
        <Rating isInteractive={true} />
      </React.Suspense>
    ),
    addons
  );
