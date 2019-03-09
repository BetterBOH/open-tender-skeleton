import React from 'react';
import { storiesOf } from '@storybook/react';

import { rewards } from 'constants/Mocks';

import { Rewards } from 'components';
import documentation from 'components/Rewards/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Rewards', module).add(
  'default',
  () => (
    <div className="col-12 md:col-5 lg:col-4">
      <Rewards rewards={rewards} />
    </div>
  ),
  addons
);
