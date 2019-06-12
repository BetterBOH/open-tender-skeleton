import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import FavoriteModel from 'constants/Models/FavoriteModel';

const FavoriteItem = React.memo(({ favorite }) =>
  RegistryLoader({ favorite }, 'components.FavoriteItem', () =>
    import('./presentation.js')
  )
);

FavoriteItem.propTypes = {
  favorite: FavoriteModel.propTypes
};

FavoriteItem.defaultProps = {
  favorite: null
};

export default FavoriteItem;
