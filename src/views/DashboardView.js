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
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import FlashVariants from 'constants/FlashVariants';
const { MESSAGE, ERROR } = FlashVariants;

class DashboardView extends PureComponent {
  handleAttemptReorder = order => {
    const Language = get(getConfig(ConfigKeys.LOCALES), 'Language');
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
          variant: MESSAGE
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
      actions: { attemptReorder, unauthenticateUser },
      customer,
      pastOrders,
      userIsAuthenticated,
      openTenderRef,
      accountDetails,
      rewards
    } = this.props;

    if (!userIsAuthenticated) return <Redirect to="/auth" />;

    return (
      <main className="DashboardView container relative">
        <DashboardHero customer={customer} />
        <DashboardNav />
        <div className="flex flex-wrap justify-center p1 col-12 bg-color-gray-light ">
          <div className="col-12 md:col-4 md:py3">
            <div className="mb3">
              <PastOrdersIndex
                orders={pastOrders}
                handleAttemptReorder={this.handleAttemptReorder}
              />
            </div>
            <div className="mb3">
              <Favorites />
            </div>
            <div className="mb3">
              <Rewards rewards={rewards} />
            </div>
            <div className="mb3">
              <AccountDetails accountDetails={accountDetails} />
            </div>
            <Button
              variant="primary"
              className="col-12 bg-color-gray-dark"
              onClick={() => unauthenticateUser(openTenderRef)}
            >
              <Text size="cta" className="text-semibold color-white">
                Logout
              </Text>
            </Button>
          </div>
        </div>
      </main>
    );
  }
}

export default DashboardView;
