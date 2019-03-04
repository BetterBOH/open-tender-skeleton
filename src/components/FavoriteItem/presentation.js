import React, { Fragment } from 'react';
import get from 'utils/get';

import { Text } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const FavoriteItem = React.memo(props => {
  const { favorite, Language } = props;
  console.log('favorite', favorite);

  return (
    <div className="FavoriteItem">
      <div className="mb1">
        <Text size="cta" className="bold">
          {'FavoriteItem'}
        </Text>
      </div>
    </div>
  );
});

export default FavoriteItem;
