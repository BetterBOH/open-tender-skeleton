import React from 'react';
import cx from 'classnames';
import { Button, Icon } from 'components';

const FavoriteIcon = React.memo(({ itemIsFavorited, onClick }) => {
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
});

export default FavoriteIcon;
