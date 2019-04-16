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

class DashboardView extends PureComponent {
  render() {
    const {
      actions: { attemptReorder, createSystemNotification, unauthenticateUser },
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
                attemptReorder={attemptReorder}
                createSystemNotification={createSystemNotification}
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
