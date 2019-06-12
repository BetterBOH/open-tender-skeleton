import React from 'react';
import cx from 'classnames';
import { Button, Icon } from 'components';

import get from 'utils/get';

const FavoriteButton = React.memo(
  ({ itemIsFavorited, removeFavorite, addFavorite, brandContext }) => {
    const favoritedColor = get(
      brandContext,
      "colors['brand-color-light']",
      null
    );
    const notFavoritedColor = get(brandContext, 'colors.gray', null);
    const toggleFavorite = itemIsFavorited ? removeFavorite : addFavorite;

    return (
      <Button
        onClick={toggleFavorite}
        variant="icon-circle-secondary"
        className={cx('p_5 mr1 hover-bg-color-gray-light', {
          'bg-color-gray-lighter': !itemIsFavorited,
          'bg-color-white': itemIsFavorited
        })}
      >
        <Icon
          icon="Heart"
          fill={itemIsFavorited ? favoritedColor : notFavoritedColor}
        />
      </Button>
    );
  }
);

export default FavoriteButton;
