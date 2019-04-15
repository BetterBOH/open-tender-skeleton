import React from 'react';
import { Text, Button } from 'components';

const DashboardNav = React.memo(({ localesContext }) => (
  <div className="DashboardNav col-12 sticky t0 l0 shadow-sm flex justify-center bg-color-white pt1">
    <div className="flex items-end justify-around col-12 md:col-4 lg:col-3 px1">
      <Button
        onClick={f => f}
        className="DashboardNav__link DashboardNav__link--active px_5 pb_5"
      >
        <Text size="description" className="text-bold">
          {localesContext.Language.t('dashboard.nav.reorder')}
        </Text>
      </Button>
      <Button onClick={f => f} className="DashboardNav__link px_5 pb_5">
        <Text size="description" className="text-bold">
          {localesContext.Language.t('dashboard.nav.rewards')}
        </Text>
      </Button>
      <Button onClick={f => f} className="DashboardNav__link px_5 pb_5">
        <Text size="description" className="text-bold">
          {localesContext.Language.t('dashboard.nav.account')}
        </Text>
      </Button>
    </div>
  </div>
));

export default DashboardNav;
