import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import FavoriteModel from 'constants/Models/FavoriteModel';

const Favorites = React.memo(
  ({ favorites, currentMenu, currentMenuQuantities }) =>
    RegistryLoader(
      { favorites, currentMenu, currentMenuQuantities },
      'components.Favorites',
      () => import('./presentation.js')
    )
);

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(FavoriteModel.propTypes)
};

Favorites.defaultProps = {
  favorites: []
};

export default Favorites;
