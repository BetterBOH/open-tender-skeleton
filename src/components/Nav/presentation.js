import React from 'react';
import get from 'utils/get';

import { Image, AccountButton } from 'components';
import { customer } from 'constants/Mocks';

const Nav = props => {
  const logo = get(props, 'brand.logoImage');

  return (
    <div className="Nav relative p1 bg-color-white flex justify-between items-center">
      <Image className="h100" src={logo} />
      <AccountButton customer={customer} />
    </div>
  );
};

export default Nav;
