import React from 'react';
import { storiesOf } from '@storybook/react';

import { Nav } from 'components';
import documentation from 'components/Nav/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Nav', module).add('with logo', () => <Nav />, addons);
