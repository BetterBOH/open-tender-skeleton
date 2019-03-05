import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import FavoriteModel from 'constants/Models/FavoriteModel';
import withLocales from 'lib/withLocales';

const FavoriteItem = React.memo(props =>
  RegistryLoader(props, 'components.FavoriteItem', () =>
    import('./presentation.js')
  )
);

FavoriteItem.propTypes = {
  favorite: FavoriteModel.propTypes
};

FavoriteItem.defaultProps = {
  favorite: {}
};

export { FavoriteItem };
export default withLocales(FavoriteItem);
