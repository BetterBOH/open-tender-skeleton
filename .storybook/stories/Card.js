import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from 'components';
import documentation from 'components/Card/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Card', module).add(
  'default',
  () => (
    <Card className="col-4">
      <h2>This is some text inside a card!</h2>
    </Card>
  ),
  addons
);
