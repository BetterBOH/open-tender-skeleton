import React, { Component } from 'react';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { Constants } from 'brandibble-redux';

import get from 'utils/get';
import { Card, Text, LinkButton, CartButton } from 'components';

const orderTypesStub = {
  [Constants.OrderTypes.CATERING]: [],
  [Constants.OrderTypes.ONLINE_ORDERING]: []
};

class WelcomeView extends Component {
  render() {
    const { localesContext, mapbox, brand, actions, orderRef } = this.props;

    const { Language } = localesContext;
    const orderTypes = get(brand, 'order_types', orderTypesStub);

    return (
      <main className="container">
        <CartButton className="absolute b0 r0 mr3 mb1 none md:block z1" />
        <div className="relative overflow-auto p2">
          <Card className="md:col-4 pb1 px1">
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
              {get(orderTypes, Constants.OrderTypes.ONLINE_ORDERING).includes(
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

              {get(orderTypes, Constants.OrderTypes.ONLINE_ORDERING).includes(
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

              {get(orderTypes, Constants.OrderTypes.CATERING).includes(
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

              {get(orderTypes, Constants.OrderTypes.CATERING).includes(
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
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(WelcomeView));
