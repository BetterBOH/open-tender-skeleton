import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { Card } from 'components';
import documentation from 'components/Card/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Card', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <Card className="col-4">
          <h2>This is some text inside a card!</h2>
        </Card>
      </React.Suspense>
    ),
    addons
  );
