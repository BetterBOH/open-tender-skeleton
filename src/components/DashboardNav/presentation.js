import React from 'react';
import cx from 'classnames';
import { FLAGS, isEnabled } from 'utils/featureFlags';
import { Text, Button } from 'components';

const DashboardNav = React.memo(
  ({ activeSection, updateActiveSection, localesContext }) => {
    return (
      <div className="DashboardNav col-12 sticky t0 l0 shadow-sm flex justify-center bg-color-white pt1">
        <div className="flex items-end justify-around col-12 md:col-4 lg:col-3 px1">
          <Button
            onClick={() => updateActiveSection('Reorder')}
            className={cx('DashboardNav__link px_5 pb_5', {
              'DashboardNav__link--active': activeSection === 'Reorder'
            })}
          >
            <Text size="description" className="text-bold">
              {localesContext.Language.t('dashboard.nav.reorder')}
            </Text>
          </Button>
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
          <Button
            onClick={() => updateActiveSection('Account')}
            className={cx('DashboardNav__link px_5 pb_5', {
              'DashboardNav__link--active': activeSection === 'Account'
            })}
          >
            <Text size="description" className="text-bold">
              {localesContext.Language.t('dashboard.nav.account')}
            </Text>
          </Button>
        </div>
      </div>
    );
  }
);

export default DashboardNav;
