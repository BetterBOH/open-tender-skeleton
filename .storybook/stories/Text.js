import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import Text from 'components/Text';
import documentation from 'components/Text/README.md';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Text', module)
  .addDecorator(checkA11y)
  .add(
    'with h1',
    () => (
      <React.Suspense fallback={<div />}>
        <Text elem="h1">Hello World</Text>
      </React.Suspense>
    ),
    addons
  )
  .add(
    'with fallback span',
    () => (
      <React.Suspense fallback={<div />}>
        <Text>Hello World</Text>
      </React.Suspense>
    ),
    addons
  )
  .add(
    'headline',
    () => (
      <React.Suspense fallback={<div />}>
        <Text size="headline">Hello World</Text>
      </React.Suspense>
    ),
    addons
  )
  .add(
    'CTA',
    () => (
      <React.Suspense fallback={<div />}>
        <Text size="cta">Hello World</Text>
      </React.Suspense>
    ),
    addons
  )
  .add(
    'body',
    () => (
      <React.Suspense fallback={<div />}>
        <Text size="body">Hello World</Text>
      </React.Suspense>
    ),
    addons
  )
  .add(
    'detail',
    () => (
      <React.Suspense fallback={<div />}>
        <Text size="detail">Hello World</Text>
      </React.Suspense>
    ),
    addons
  );
