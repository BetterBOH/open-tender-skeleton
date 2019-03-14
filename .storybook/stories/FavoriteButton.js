import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { menuItem } from 'constants/Mocks';
import { FavoriteButton } from 'components';
import documentation from 'components/FavoriteButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('FavoriteButton', module)
  .add(
    'default',
    () => <FavoriteButton itemIsFavorited={true} item={menuItem} />,
    addons
  )
  .add(
    'Not Favorited',
    () => <FavoriteButton itemIsFavorited={false} item={menuItem} />,
    addons
  );
