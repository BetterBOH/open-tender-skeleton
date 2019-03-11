import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import FavoriteModel from 'constants/Models/FavoriteModel';
import withLocales from 'lib/withLocales';

const Favorites = React.memo(props =>
  RegistryLoader(props, 'components.Favorites', () =>
    import('./presentation.js')
  )
);

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(FavoriteModel.propTypes)
};

Favorites.defaultProps = {
  favorites: []
};

export default withLocales(Favorites);
