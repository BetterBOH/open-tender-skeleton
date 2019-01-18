import React from 'react';
import get from 'utils/get';

import { Image } from 'components';

export default props => {
  const logo = get(props, 'brand.logoImage');

  return (
    <div className="Nav relative p1 bg-color-white">
      <Image className="h100" src={logo} />
    </div>
  );
};
