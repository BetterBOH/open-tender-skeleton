import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import Text from '../../src/components/Text';
import documentation from '../../src/components/Text/README.md';

const addons = {
  notes: { markdown: documentation },
};

storiesOf('Text', module)
  .addDecorator(checkA11y)
  .add('with h1', () => (
    <React.Suspense fallback={<div />}>
      <Text elem="h1">Hello World</Text>
    </React.Suspense>
  ), addons)
  .add('with fallback span', () => (
    <React.Suspense fallback={<div />}>
      <Text>Hello World</Text>
    </React.Suspense>
  ), addons)
