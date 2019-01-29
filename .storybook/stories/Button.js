import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { Button } from 'components';
import documentation from 'components/Button/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Button', module)
  .addDecorator(checkA11y)
  .add(
    'primary',
    () => (
      <React.Suspense fallback={<div />}>
        <Button variant="no-style" onClick={() => alert('Clicked!')}>
          Click Me
        </Button>
      </React.Suspense>
    ),
    addons
  )
  .add(
    'no-style',
    () => (
      <React.Suspense fallback={<div />}>
        <Button variant="no-style" onClick={() => alert('Clicked!')}>
          Click Me
        </Button>
      </React.Suspense>
    ),
    addons
  )
  .add(
    'with external link',
    () => (
      <React.Suspense fallback={<div />}>
        <Button variant="no-style" to="https://google.com" text="Click Me" />
      </React.Suspense>
    ),
    addons
  );
