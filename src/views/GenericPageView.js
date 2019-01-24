import React, { Component } from 'react';
import withConfig from 'lib/withConfig';

const Card = React.lazy(() => import('components/Card'));
const Text = React.lazy(() => import('components/Text'));
const LinkButton = React.lazy(() => import('components/LinkButton'));

class GenericPageView extends Component {
  render() {
    return (
      <div className="relative">
        <Card className="md:col-4">
          <LinkButton iconLeft="Phone" text="Order now" />
          <LinkButton iconLeft="Heart">
            <Text>
              Order for your <strong>friend</strong>
              Order for <span className="text-semibold">your</span>{' '}
              <strong>friend</strong>
            </Text>
          </LinkButton>
          <LinkButton iconLeft="Car">
            <Text>
              Order for <strong>pickup</strong>
            </Text>
          </LinkButton>
          <Text elem="h1">
            {this.props.Language.t('global.hello')}{' '}
            {this.props.location.pathname}
          </Text>
        </Card>
      </div>
    );
  }
}

export default withConfig(GenericPageView);
