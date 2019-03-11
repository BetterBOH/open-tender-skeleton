import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { favorites } from 'constants/Mocks';
import Favorites from 'components/Favorites';
import documentation from 'components/Favorites/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('Favorites', module).add(
  'default',
  () => <Favorites favorites={favorites} />,
  addons
);
