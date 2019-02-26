import React from 'react';
import { Constants } from 'brandibble-redux';

import { Card, Text, LinkButton } from 'components';

const WelcomeOrderType = React.memo(props => {
  const { actions, orderTypes, orderRef, localesContext } = props;
  const { Language } = localesContext;

  return (
    <Card className="md:col-6 lg:col-4 pb1 px_5 md:px1">
      <div className="text-center my2 px1">
        <Text
          size="small"
          className="block text-semibold uppercase color-light-gray letter-spacing-xs"
        >
          {Language.t('welcome.adlib')}
        </Text>
        <Text size="headline" className="block my1">
          {Language.t('welcome.headline')}
        </Text>
        <Text size="description" className="block color-light-gray">
          {Language.t('welcome.description')}
        </Text>
      </div>
      <React.Fragment>
        {orderTypes[Constants.OrderTypes.ONLINE_ORDERING].includes(
          Constants.ServiceTypes.PICKUP
        ) ? (
          <LinkButton
            className="mb_5"
            iconLeft="Bag"
            onClick={() =>
              actions.setOrderAndServiceType(
                orderRef,
                Constants.OrderTypes.ONLINE_ORDERING,
                Constants.ServiceTypes.PICKUP
              )
            }
          >
            <Text size="cta" className="color-light-gray">
              <span>{Language.t('welcome.orderFor')}</span>{' '}
              <span className="text-semibold color-gray">
                {Language.t('welcome.orderTypes.pickup')}
              </span>
            </Text>
          </LinkButton>
        ) : null}

        {orderTypes[Constants.OrderTypes.ONLINE_ORDERING].includes(
          Constants.ServiceTypes.DELIVERY
        ) ? (
          <LinkButton
            className="mb_5"
            iconLeft="Car"
            onClick={() =>
              actions.setOrderAndServiceType(
                orderRef,
                Constants.OrderTypes.ONLINE_ORDERING,
                Constants.ServiceTypes.DELIVERY
              )
            }
          >
            <Text size="cta" className="color-light-gray">
              <span>{Language.t('welcome.orderFor')}</span>{' '}
              <span className="text-semibold color-gray">
                {Language.t('welcome.orderTypes.delivery')}
              </span>
            </Text>
          </LinkButton>
        ) : null}

        {orderTypes[Constants.OrderTypes.CATERING].includes(
          Constants.ServiceTypes.PICKUP
        ) ? (
          <LinkButton
            className="mb_5"
            iconLeft="Group"
            onClick={() =>
              actions.setOrderAndServiceType(
                orderRef,
                Constants.OrderTypes.CATERING,
                Constants.ServiceTypes.PICKUP
              )
            }
          >
            <Text size="cta" className="color-light-gray">
              <span>{Language.t('welcome.orderFor')}</span>{' '}
              <span className="text-semibold color-gray">
                {Language.t('welcome.orderTypes.catering')}{' '}
                {Language.t('welcome.orderTypes.pickup')}
              </span>
            </Text>
          </LinkButton>
        ) : null}

        {orderTypes[Constants.OrderTypes.CATERING].includes(
          Constants.ServiceTypes.DELIVERY
        ) ? (
          <LinkButton
            className="mb_5"
            iconLeft="Group"
            onClick={() =>
              actions.setOrderAndServiceType(
                orderRef,
                Constants.OrderTypes.CATERING,
                Constants.ServiceTypes.DELIVERY
              )
            }
          >
            <Text size="cta" className="color-light-gray">
              <span>{Language.t('welcome.orderFor')}</span>{' '}
              <span className="text-semibold color-gray">
                {Language.t('welcome.orderTypes.catering')}{' '}
                {Language.t('welcome.orderTypes.delivery')}
              </span>
            </Text>
          </LinkButton>
        ) : null}
      </React.Fragment>
    </Card>
  );
});

export default WelcomeOrderType;
