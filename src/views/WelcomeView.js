import React, { Component } from 'react';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

const Card = React.lazy(() => import('components/Card'));
const Text = React.lazy(() => import('components/Text'));
const Icon = React.lazy(() => import('components/Icon'));
const LinkButton = React.lazy(() => import('components/LinkButton'));

class WelcomeView extends Component {
  handleClick = () => {
    const { actions, openTenderRef } = this.props;

    actions.fetchLocation(openTenderRef, 538).then(console.log);
  };

  render() {
    console.log('VIEW', this.props);
    const { Language } = this.props;

    return (
      <div className="relative">
        <Card className="md:col-4 pb1">
          <div className="text-center my2">
            <Text
              size="small"
              className="block text-semibold uppercase color-light-gray letter-spacing-sm"
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
          <LinkButton iconLeft="Bag" onClick={this.handleClick}>
            <Text size="cta" className="color-light-gray">
              <span
                dangerouslySetInnerHTML={{
                  __html: Language.t('welcome.orderTypes.pickup')
                }}
              />
            </Text>
          </LinkButton>
          <LinkButton iconLeft="Heart">
            <Text size="cta" className="color-light-gray">
              <span
                dangerouslySetInnerHTML={{
                  __html: Language.t('welcome.orderTypes.delivery')
                }}
              />
            </Text>
          </LinkButton>
          <LinkButton iconLeft="Car">
            <Text size="cta" className="color-light-gray">
              <span
                dangerouslySetInnerHTML={{
                  __html: Language.t('welcome.orderTypes.catering')
                }}
              />
            </Text>
          </LinkButton>
        </Card>
      </div>
    );
  }
}

export default withComponents(withLocales(WelcomeView));
