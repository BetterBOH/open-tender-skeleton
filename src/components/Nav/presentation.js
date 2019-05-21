import React from 'react';
import get from 'utils/get';
import getRoutes from 'utils/getRoutes';
import { Image, AccountButton, Anchor } from 'components';

const Nav = React.memo(({ customer, brand, localesContext }) => (
  <div className="Nav fixed t0 l0 z4 col-12 px1 md:px1_5 py_5 bg-color-white flex justify-between items-center border-bottom">
    <Anchor url={getRoutes().WELCOME} className="h100 py_25">
      <Image
        className="h100"
        src={get(brand, 'logo')}
        alt={localesContext.Language.t('global.home')}
      />
    </Anchor>
    <AccountButton customer={customer} />
  </div>
));

export default Nav;
