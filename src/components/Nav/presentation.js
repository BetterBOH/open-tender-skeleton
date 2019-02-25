import React from 'react';
import get from 'utils/get';

import { Image } from 'components';
import { AccountButton } from 'components/AccountButton';

const Nav = React.memo(props => {
  debugger;
  const { brand, localesContext } = props;
  const logo = get(brand, 'logoImage');

  return (
    <div className="Nav relative p1 bg-color-white flex justify-between items-center">
      <Image className="h100" src={logo} />
      <AccountButton localesContext={localesContext} />
    </div>
  );
});

export default Nav;
