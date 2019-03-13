import React from 'react';
import cx from 'classnames';
import { Button, Icon } from 'components';

const FavoriteButton = React.memo(
  ({ itemIsFavorited, removeFavorite, addFavorite }) => {
    const onClick = itemIsFavorited ? removeFavorite : addFavorite;
    const favoriteIcon = itemIsFavorited ? (
      <Icon icon="Heart" fill="red" />
    ) : (
      <Icon icon="Heart" />
    );

    return (
      <Button
        onClick={onClick}
        variant="icon-circle-secondary"
        className={cx('p_5', 'mr1', {
          'bg-color-gray-light': !itemIsFavorited,
          'bg-color-white': itemIsFavorited
        })}
      >
        {favoriteIcon}
      </Button>
    );
  }
);

export default FavoriteButton;
