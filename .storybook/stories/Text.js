import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../../src/components/Text';

storiesOf('Text', module)
  .add('with h1', () => (
    <React.Suspense fallback={<div />}>
      <Text elem="h1">Hello World</Text>
    </React.Suspense>
  ))
  .add('with fallback span', () => (
    <React.Suspense fallback={<div />}>
      <Text>Hello World</Text>
    </React.Suspense>
  ))
