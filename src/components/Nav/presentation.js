import React from 'react';
import get from 'utils/get';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import { Link } from 'react-router-dom';

import { Image, AccountButton } from 'components';

const welcomePath = get(getConfig(ConfigKeys.ROUTES), 'welcome.path');

const Nav = React.memo(({ brandContext, customer }) => (
  <div className="Nav relative px1 py_5 bg-color-white flex justify-between items-center border-color-gray-light">
    <Link to={welcomePath} className="h100 py_25">
      <Image className="h100" src={get(brandContext, 'logoImage')} />
    </Link>
    <AccountButton customer={customer} />
  </div>
));

export default Nav;
