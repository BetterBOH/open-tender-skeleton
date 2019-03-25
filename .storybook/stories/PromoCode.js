import React from 'react';
import { storiesOf } from '@storybook/react';

import { PromoCode } from 'components';
import documentation from 'components/PromoCode/README.md';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('PromoCode', module).add(
  'default (primary)',
  () => <PromoCode />,
  addons
);
