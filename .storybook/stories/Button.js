import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from 'components';
import documentation from 'components/Button/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Button', module)
  .add(
    'primary',
    () => (
      <Button variant="no-style" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    ),
    addons
  )
  .add(
    'no-style',
    () => (
      <Button variant="no-style" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    ),
    addons
  )
  .add(
    'with external link',
    () => <Button variant="no-style" to="https://google.com" text="Click Me" />,
    addons
  );
