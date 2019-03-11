import React from 'react';
import { storiesOf } from '@storybook/react';

import { rewards } from 'constants/Mocks';

import { RewardItem } from 'components';
import documentation from 'components/RewardItem/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('RewardItem', module).add(
  'default',
  () => (
    <div className="col-12 md:col-5 lg:col-4">
      <RewardItem reward={rewards[0]} />
    </div>
  ),
  addons
);
