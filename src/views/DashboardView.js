import React, { PureComponent } from 'react';
import get from 'utils/get';
import { Redirect } from 'react-router-dom';
import withLocales from 'lib/withLocales';

import {
  Text,
  Rewards,
  Favorites,
  Button,
  DetailsCard,
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
      rewards,
      localesContext
    } = this.props;

    if (!userIsAuthenticated) return <Redirect to="/auth" />;

    const addressText = get(accountDetails, 'defaultAddress.street_address')
      ? get(accountDetails, 'defaultAddress.street_address')
      : localesContext.Language.t('account.addAddress');

    const paymentText =
      get(accountDetails, 'defaultPayment.card_type') &&
      get(accountDetails, 'defaultPayment.last4')
        ? `${get(
            accountDetails,
            'defaultPayment.card_type'
          )} ${localesContext.Language.t('account.ccEndingIn')}${get(
            accountDetails,
            'defaultPayment.last4'
          )}`
        : localesContext.Language.t('account.addCreditCard');

    const numberOfAddresses = `${localesContext.Language.t(
      'account.delivery'
    )} (${get(accountDetails, 'addresses.length', 0)})`;

    const numberOfPayments = `${localesContext.Language.t(
      'account.payment'
    )} (${get(accountDetails, 'payments.length', 0)})`;

    const formattedAccountDetails = [
      {
        label: localesContext.Language.t('account.name'),
        icon: 'User',
        value: get(accountDetails, 'fullName', ''),
        children: null
      },
      {
        label: localesContext.Language.t('account.email'),
        icon: 'At',
        value: get(accountDetails, 'email', ''),
        children: null
      },
      {
        label: localesContext.Language.t('account.password'),
        icon: 'Lock',
        value: '*********',
        children: null
      },
      {
        label: numberOfAddresses,
        icon: 'Map',
        value: addressText,
        children: null
      },
      {
        label: numberOfPayments,
        icon: 'CreditCard',
        value: paymentText,
        children: null
      }
    ];

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
              <div className="px1 mb_5">
                <Text size="cta" className="bold">
                  {localesContext.Language.t('account.details')}
                </Text>
              </div>
              <div className="px1 mb1_5">
                <Text size="description" className="color-gray-dark">
                  {localesContext.Language.t('account.instructions')}
                </Text>
              </div>
              <DetailsCard details={formattedAccountDetails} />
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

export default withLocales(DashboardView);
