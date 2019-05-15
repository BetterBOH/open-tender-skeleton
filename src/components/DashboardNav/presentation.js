import React from 'react';
import cx from 'classnames';
import { FLAGS, isEnabled } from 'utils/featureFlags';
import { Text, Button } from 'components';
import { Link } from 'react-scroll';
import Dashboard from 'constants/Dashboard';

const DashboardNav = React.memo(({ activeSection, localesContext }) => (
  <div className="DashboardNav col-12 sticky t0 l0 shadow-sm flex items-end justify-center bg-color-white z1">
    <div className="flex items-start justify-around col-12 md:col-4 lg:col-3 px1">
      <Link
        to={Dashboard.REORDER}
        className={cx('DashboardNav__link px_5 pb_5 pointer', {
          'DashboardNav__link--active': activeSection === Dashboard.REORDER
        })}
        offset={-96}
        duration={1000}
        smooth="easeInOutQuad"
        isDynamic
        spy
      >
        <Text size="description" className="text-bold">
          {localesContext.Language.t('dashboard.nav.reorder')}
        </Text>
      </Link>
      {isEnabled(FLAGS.REWARDS) && (
        <Button onClick={f => f} className="DashboardNav__link px_5 pb_5">
          <Text size="description" className="text-bold">
            {localesContext.Language.t('dashboard.nav.rewards')}
          </Text>
        </Button>
      )}
      {isEnabled(FLAGS.FAVORITING) && (
        <Button onClick={f => f} className="DashboardNav__link px_5 pb_5">
          <Text size="description" className="text-bold">
            {localesContext.Language.t('dashboard.nav.favorites')}
          </Text>
        </Button>
      )}
      <Link
        to={Dashboard.ACCOUNT}
        className={cx('DashboardNav__link px_5 pb_5 pointer', {
          'DashboardNav__link--active': activeSection === Dashboard.ACCOUNT
        })}
        offset={-96}
        duration={1000}
        smooth="easeInOutQuad"
        isDynamic
        spy
      >
        <Text size="description" className="text-bold">
          {localesContext.Language.t('dashboard.nav.account')}
        </Text>
      </Link>
    </div>
  </div>
));

export default DashboardNav;
