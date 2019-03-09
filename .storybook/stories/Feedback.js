import React from 'react';
import { storiesOf } from '@storybook/react';

import { Feedback } from 'components';
import documentation from 'components/Feedback/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

const testActions = { submitRating: data => console.log(data) };

storiesOf('Feedback', module).add(
  'default',
  () => (
    <div className="col-12 md:col-5 lg:col-4">
      <Feedback actions={testActions} />
    </div>
  ),
  addons
);
