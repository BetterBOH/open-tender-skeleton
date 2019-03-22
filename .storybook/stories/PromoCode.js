import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { PromoCode } from 'components';
import documentation from 'components/PromoCode/README.md';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('PromoCode', module)
  .addDecorator(checkA11y)
  .add('default (primary)', () => <PromoCode />, addons);
