import React, { Component } from 'react';
import withConfig from 'lib/withConfig';

const Card = React.lazy(() => import('components/Card'));
const Text = React.lazy(() => import('components/Text'));

class GenericPageView extends Component {
  render() {
    return (
      <div className="relative">
        <Card className="md:col-4">
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
