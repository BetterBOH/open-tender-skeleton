import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from 'components/Text';
import documentation from 'components/Text/README.md';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Text', module)
  .add('with h1', () => <Text elem="h1">Hello World</Text>, addons)
  .add('with fallback span', () => <Text>Hello World</Text>, addons)
  .add('headline', () => <Text size="headline">Hello World</Text>, addons)
  .add('CTA', () => <Text size="cta">Hello World</Text>, addons)
  .add('body', () => <Text size="body">Hello World</Text>, addons)
  .add('detail', () => <Text size="detail">Hello World</Text>, addons);
