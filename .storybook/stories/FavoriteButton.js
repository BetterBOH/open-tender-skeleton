import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { lineItemsData } from 'constants/Mocks';
import { FavoriteButton } from 'components';
import documentation from 'components/FavoriteButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('FavoriteButton', module)
  .add(
    'default',
    () => <FavoriteButton itemIsFavorited={true} item={lineItemsData[0]} />,
    addons
  )
  .add(
    'Not Favorited',
    () => <FavoriteButton itemIsFavorited={false} item={lineItemsData[0]} />,
    addons
  );
