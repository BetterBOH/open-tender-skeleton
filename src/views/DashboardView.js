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
import { DashboardSections, OFFSET_TOP } from 'constants/Dashboard';

const { REORDER, FAVORITES, ACCOUNT } = DashboardSections;

class DashboardView extends PureComponent {
  constructor() {
    super(...arguments);

    this.reorderRef = createRef();
    this.favoritesRef = createRef();
    this.accountRef = createRef();

    this.state = {
      currentSection: REORDER
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
          )
        });
      }

      if (isReorderable && !itemsWereRemoved) {
        return createSystemNotification({
          message: Language.t(
            'systemNotification.attemptReorder.success.reorderSuccessful'
          )
        });
      }

      if (!isReorderable) {
        return createSystemNotification({
          message: Language.t('systemNotification.attemptReorder.error')
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
    const sectionDistanceFromTop = sectionBounds.top;

    return (
      sectionDistanceFromTop > 0 && sectionDistanceFromTop < OFFSET_TOP * 2
    );
  };

  handleScroll = () => {
    if (
      this.isScrolledIntoView(this.reorderRef.current) &&
      this.state.currentSection !== REORDER
    ) {
      return this.updateActiveSection(REORDER);
    }

    if (
      this.isScrolledIntoView(this.favoritesRef.current) &&
      this.state.currentSection !== FAVORITES
    ) {
      return this.updateActiveSection(FAVORITES);
    }

    if (
      this.isScrolledIntoView(this.accountRef.current) &&
      this.state.currentSection !== ACCOUNT
    ) {
      return this.updateActiveSection(ACCOUNT);
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
      allergens,
      userFavorites,
      updateUserStatus,
      updateUserErrors,
      rewards,
      currentMenu,
      currentMenuQuantities
    } = this.props;

    if (!userIsAuthenticated) return <Redirect to="/auth" />;

    const { unauthenticateUser } = actions;
    const Language = get(this, 'props.localesContext.Language');

    return (
      <main className="DashboardView container relative">
        <DashboardHero customer={customer} />
        <DashboardNav activeSection={this.state.currentSection} />
        <div className="flex flex-col justify-center py1 col-12 bg-color-gray-lighter">
          <div ref={this.reorderRef}>
            <ScrollToSection className="py1_5 px1" sectionName={REORDER}>
              <PastOrdersIndex
                orders={allOrders}
                handleAttemptReorder={this.handleAttemptReorder}
              />
            </ScrollToSection>
          </div>
          <div ref={this.favoritesRef}>
            <ScrollToSection
              className="py1_5 px1 bg-color-white"
              sectionName={FAVORITES}
            >
              <Favorites
                favorites={userFavorites}
                currentMenu={currentMenu}
                currentMenuQuantities={currentMenuQuantities}
                actions={actions}
              />
            </ScrollToSection>
          </div>
          {isEnabled(FLAGS.REWARDS) && (
            <div className="mb3">
              <Rewards rewards={rewards} />
            </div>
          )}
          <div ref={this.accountRef}>
            <ScrollToSection className="py1_5 px1" sectionName={ACCOUNT}>
              <AccountDetails
                openTenderRef={openTenderRef}
                updateUser={actions.updateUser}
                updateUserStatus={updateUserStatus}
                updateUserErrors={updateUserErrors}
                accountDetails={accountDetails}
                allergens={allergens}
              />
            </ScrollToSection>
          </div>
          <div className="mx1 my3">
            <Button
              variant="primary"
              className="col-12 bg-color-gray-dark hover-bg-color-black"
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
