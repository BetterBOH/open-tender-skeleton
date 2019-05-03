import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import {
  Text,
  Rewards,
  Favorites,
  Button,
  AccountDetails,
  DashboardHero,
  DashboardNav,
  PastOrdersIndex
} from 'components';

import get from 'utils/get';
import { FLAGS, isEnabled } from 'utils/featureFlags';
import withLocales from 'lib/withLocales';

import { PICKUP } from 'constants/OpenTender';
import FlashVariants from 'constants/FlashVariants';
const { MESSAGE, WARNING, ERROR } = FlashVariants;

class DashboardView extends PureComponent {
  handleAttemptReorder = order => {
    const Language = get(this, 'props.localesContext.Language');
    const {
      actions: { attemptReorder, createSystemNotification }
    } = this.props;

    /**
     * This callback provided to attemptReorder
     * gets called after attemptReorder succeeds/fails.
     * It returns two bools: isReorderable and itemsWereRemoved
     * which the client can use to inform the customer about the
     * status of their reorder.
     */

    function onAttemptReorderEnd({ isReorderable, itemsWereRemoved }) {
      if (isReorderable && itemsWereRemoved) {
        return createSystemNotification({
          message: Language.t(
            'systemNotification.attemptReorder.success.itemsWereRemoved'
          ),
          variant: WARNING
        });
      }

      if (isReorderable && !itemsWereRemoved) {
        return createSystemNotification({
          message: Language.t(
            'systemNotification.attemptReorder.success.reorderSuccessful'
          ),
          variant: MESSAGE
        });
      }

      if (!isReorderable) {
        return createSystemNotification({
          message: Language.t('systemNotification.attemptReorder.error'),
          variant: ERROR
        });
      }
    }

    return attemptReorder(order, onAttemptReorderEnd);
  };

  render() {
    const {
      actions,
      customer,
      allOrders,
      userIsAuthenticated,
      openTenderRef,
      accountDetails,
      orderRef,
      rewards
    } = this.props;

    if (!userIsAuthenticated) return <Redirect to="/auth" />;

    const { unauthenticateUser } = actions;
    const Language = get(this, 'props.localesContext.Language');

    return (
      <main className="DashboardView container relative">
        <DashboardHero customer={customer} />
        <DashboardNav />
        <div className="flex flex-wrap justify-center p1 col-12 bg-color-gray-light ">
          <div className="col-12 md:col-4 md:py3">
            <div className="mb3">
              <PastOrdersIndex
                orders={allOrders}
                handleAttemptReorder={this.handleAttemptReorder}
              />
            </div>
            {isEnabled(FLAGS.FAVORITING) && (
              <div className="mb3">
                <Favorites />
              </div>
            )}
            {isEnabled(FLAGS.REWARDS) && (
              <div className="mb3">
                <Rewards rewards={rewards} />
              </div>
            )}
            <div className="mb3">
              <AccountDetails accountDetails={accountDetails} />
            </div>
            <Button
              variant="primary"
              className="col-12 bg-color-gray-dark"
              onClick={() => unauthenticateUser(openTenderRef)}
            >
              <Text size="cta" className="text-semibold color-white">
                {Language.t('dashboard.logout')}
              </Text>
            </Button>
          </div>
        </div>
      </main>
    );
  }
}

export default withLocales(DashboardView);
