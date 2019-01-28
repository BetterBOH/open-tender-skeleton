import React, { Component } from 'react';
import withConfig from 'lib/withConfig';

const Card = React.lazy(() => import('components/Card'));
const Text = React.lazy(() => import('components/Text'));
const Icon = React.lazy(() => import('components/Icon'));
const LinkButton = React.lazy(() => import('components/LinkButton'));

class GenericPageView extends Component {
  render() {
    return (
      <div className="relative">
        <Card className="md:col-4">
          <Text size="headline">
            What type of order would you like to place?
          </Text>
          <LinkButton iconLeft="Phone" text="Order now" />
          <LinkButton iconLeft="Heart">
            <Text size="cta">
              Order for <span className="text-semibold">your</span>{' '}
              <strong>friend</strong>
            </Text>
          </LinkButton>
          <LinkButton iconLeft="Car">
            <Text size="cta">
              Order for <strong>pickup</strong>
            </Text>
          </LinkButton>
        </Card>
      </div>
    );
  }
}

export default withConfig(GenericPageView);
