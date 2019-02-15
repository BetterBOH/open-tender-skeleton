import React from 'react';
import get from 'utils/get';

import { Image, AccountButton } from 'components';

const Nav = React.memo(({ brand }) => {
  const logo = get(brand, 'logoImage');

  return (
    <div className="Nav relative p1 bg-color-white flex justify-between items-center">
      <Image className="h100" src={logo} />
      <AccountButton />
    </div>
  );
});

export default Nav;
