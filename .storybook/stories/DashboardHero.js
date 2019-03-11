import React from 'react';
import { storiesOf } from '@storybook/react';

import { customer } from 'constants/Mocks';

import { DashboardHero } from 'components';
import documentation from 'components/DashboardHero/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('DashboardHero', module).add(
  'default',
  () => <DashboardHero customer={customer} />,
  addons
);
