import React, { Fragment } from 'react';
import get from 'utils/get';

import { Text } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const Favorites = React.memo(props => {
  const { favorites, Language } = props;

  return (
    <div className="Favorites">
      <div className="mb1">
        <Text size="cta" className="bold">
          {'Favorites'}
        </Text>
      </div>
    </div>
  );
});

export default Favorites;
