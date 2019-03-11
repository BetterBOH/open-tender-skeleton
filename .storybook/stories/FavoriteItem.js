import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { favorite } from 'constants/Mocks';
import { FavoriteItem } from 'components';
import documentation from 'components/FavoriteItem/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('FavoriteItem', module).add(
  'default',
  () => <FavoriteItem favorite={favorite} />,
  addons
);
