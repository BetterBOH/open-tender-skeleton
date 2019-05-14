import React, { PureComponent, createRef } from 'react';
import { Redirect } from 'react-router-dom';
import ScrollToSection from 'components/ScrollTo/ScrollToSection';
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

import throttle from 'utils/throttle';
import EventListeners from 'constants/EventListeners';
import Dashboard from 'constants/Dashboard';
import FlashVariants from 'constants/FlashVariants';
const { MESSAGE, WARNING, ERROR } = FlashVariants;

class DashboardView extends PureComponent {
  constructor() {
    super(...arguments);

    this.reorderRef = createRef();
    this.accountRef = createRef();

    this.state = {
      currentSection: Dashboard.REORDER
    };
  }

  componentDidMount = () => {
    this.scrollListener = throttle(
      this.handleScroll,
      EventListeners.SCROLL_THROTTLE_LIMIT
    );
    window.addEventListener('scroll', this.scrollListener);
  };

  componentWillUnmount = () => {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  };

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

  updateActiveSection = sectionName => {
    this.setState({ currentSection: sectionName });
  };

  isScrolledIntoView = section => {
    const sectionBounds = section.getBoundingClientRect();
    const sectionUpperBounds = sectionBounds.top;
    const sectionLowerBounds = sectionBounds.bottom;

    return (
      window.pageYOffset > sectionUpperBounds &&
      window.pageYOffset < sectionLowerBounds
    );
  };

  handleScroll = () => {
    if (
      this.isScrolledIntoView(this.reorderRef.current) &&
      this.state.currentSection !== Dashboard.REORDER
    ) {
      return this.updateActiveSection(Dashboard.REORDER);
    }

    if (
      this.isScrolledIntoView(this.accountRef.current) &&
      this.state.currentSection !== Dashboard.ACCOUNT
    ) {
      return this.updateActiveSection(Dashboard.ACCOUNT);
    }

    return null;
  };

  render() {
    const {
      actions,
      customer,
      allOrders,
      userIsAuthenticated,
      openTenderRef,
      accountDetails,
      updateUserStatus,
      rewards
    } = this.props;

    if (!userIsAuthenticated) return <Redirect to="/auth" />;

    const { unauthenticateUser } = actions;
    const Language = get(this, 'props.localesContext.Language');

    return (
      <main className="DashboardView container relative">
        <DashboardHero customer={customer} />
        <DashboardNav
          updateActiveSection={this.updateActiveSection}
          activeSection={this.state.currentSection}
        />
        <div className="flex flex-wrap justify-center p1 col-12 bg-color-gray-lighter">
          <div className="col-12 md:col-4 md:py3">
            <div ref={this.reorderRef}>
              <ScrollToSection className="mb3" sectionName={Dashboard.REORDER}>
                <PastOrdersIndex
                  orders={allOrders}
                  handleAttemptReorder={this.handleAttemptReorder}
                />
              </ScrollToSection>
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
            <div ref={this.accountRef}>
              <ScrollToSection className="mb3" sectionName={Dashboard.ACCOUNT}>
                <AccountDetails
                  openTenderRef={openTenderRef}
                  updateUser={actions.updateUser}
                  updateUserStatus={updateUserStatus}
                  accountDetails={accountDetails}
                />
              </ScrollToSection>
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
