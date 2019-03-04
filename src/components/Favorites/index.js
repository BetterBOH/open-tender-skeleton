import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import FavoriteModel from 'constants/Models/FavoriteModel';
import withLocales from 'lib/withLocales';

const Favorites = React.memo(props =>
  RegistryLoader(props, 'components.Favorites', () =>
    import('./presentation.js')
  )
);

Favorites.propTypes = {
  favorites: FavoriteModel.propTypes
};

Favorites.defaultProps = {
  favorites: FavoriteModel.defaultProps
};

export { Favorites };
export default withLocales(Favorites);
