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
  favorites: PropTypes.arrayOf(FavoriteModel.propTypes),
  headerText: PropTypes.string,
  subtitle: PropTypes.string
};

Favorites.defaultProps = {
  favorites: [],
  headerText: '',
  subtitle: ''
};

export { Favorites };
export default withLocales(Favorites);
