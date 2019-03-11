import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { lineItemsData } from 'constants/Mocks';
import { FavoriteIcon } from 'components';
import documentation from 'components/FavoriteIcon/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

storiesOf('FavoriteIcon', module)
  .add(
    'default',
    () => <FavoriteIcon itemIsFavorited={true} item={lineItemsData[0]} />,
    addons
  )
  .add(
    'Not Favorited',
    () => <FavoriteIcon itemIsFavorited={false} item={lineItemsData[0]} />,
    addons
  );
