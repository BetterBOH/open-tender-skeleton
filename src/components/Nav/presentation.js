import React from 'react';
import get from 'utils/get';

import { Image, AccountButton } from 'components';

const Nav = React.memo(props => {
  const { brandContext } = props;
  const logo = get(brandContext, 'logoImage');

  return (
    <div className="Nav relative p1 bg-color-white flex justify-between items-center border-color-gray-light">
      <Image className="h100" src={logo} />
      <AccountButton />
    </div>
  );
});

export default Nav;
