import React from 'react';
import { Constants } from 'brandibble-redux';

import { Card, Text, LinkButton } from 'components';

const { PICKUP } = Constants.ServiceTypes;

const WelcomeOrderType = React.memo(props => {
  const { actions, orderTypes, orderRef, localesContext } = props;
  const { Language } = localesContext;

  return (
    <Card className="col-12 py2 px_5 md:px1">
      <div className="text-center px1 mb2">
        <Text
          size="small"
          className="block text-semibold uppercase color-gray-dark letter-spacing-xs"
        >
          {Language.t('welcome.adlib')}
        </Text>
        <Text size="headline" className="block my1">
          {Language.t('welcome.headline')}
        </Text>
        <Text size="description" className="block color-gray-dark">
          {Language.t('welcome.description')}
        </Text>
      </div>
      <React.Fragment>
        {orderTypes[Constants.OrderTypes.ONLINE_ORDERING].includes(PICKUP) && (
          <LinkButton
            className="mb_5 bg-color-white hover-bg-color-gray-lighter"
            iconLeft="Bag"
            onClick={() =>
              actions.setOrderAndServiceType(
                orderRef,
                Constants.OrderTypes.ONLINE_ORDERING,
                PICKUP
              )
            }
          >
            <Text size="cta" className="color-gray">
              <span>{Language.t('welcome.orderFor')}</span>{' '}
              <span className="text-semibold color-black">
                {Language.t('welcome.orderTypes.pickup')}
              </span>
            </Text>
          </LinkButton>
        )}

        {orderTypes[Constants.OrderTypes.ONLINE_ORDERING].includes(
          Constants.ServiceTypes.DELIVERY
        ) && (
          <LinkButton
            className="mb_5 bg-color-white hover-bg-color-gray-lighter"
            iconLeft="Car"
            onClick={() =>
              actions.setOrderAndServiceType(
                orderRef,
                Constants.OrderTypes.ONLINE_ORDERING,
                Constants.ServiceTypes.DELIVERY
              )
            }
          >
            <Text size="cta" className="color-gray">
              <span>{Language.t('welcome.orderFor')}</span>{' '}
              <span className="text-semibold color-black">
                {Language.t('welcome.orderTypes.delivery')}
              </span>
            </Text>
          </LinkButton>
        )}

        {orderTypes[Constants.OrderTypes.CATERING].includes(
          Constants.ServiceTypes.DELIVERY
        ) && (
          <LinkButton
            className="mb_5 bg-color-white hover-bg-color-gray-lighter"
            iconLeft="Group"
            onClick={() =>
              actions.setOrderAndServiceType(
                orderRef,
                Constants.OrderTypes.CATERING,
                Constants.ServiceTypes.DELIVERY
              )
            }
          >
            <Text size="cta" className="color-gray">
              <span>{Language.t('welcome.orderFor')}</span>{' '}
              <span className="text-semibold color-black">
                {Language.t('welcome.orderTypes.catering')}
              </span>
            </Text>
          </LinkButton>
        )}
      </React.Fragment>
    </Card>
  );
});

export default WelcomeOrderType;
