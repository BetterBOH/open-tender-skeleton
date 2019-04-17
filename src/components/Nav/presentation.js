import React from 'react';
import get from 'utils/get';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';

import { Image, AccountButton, Anchor } from 'components';

const welcomePath = get(getConfig(ConfigKeys.ROUTES), 'welcome.path');

const Nav = React.memo(({ brandContext, customer }) => (
  <div className="Nav fixed t0 l0 z4 col-12 px1 py_5 bg-color-white flex justify-between items-center border-color-gray-light">
    <Anchor url={welcomePath} className="h100 py_25">
      <Image className="h100" src={get(brandContext, 'logoImage')} />
    </Anchor>
    <AccountButton customer={customer} />
  </div>
));

export default Nav;
