import React, { Component } from 'react';
import withConfig from 'lib/withConfig';

const Text = React.lazy(() => import('components/Text'));

class GenericPageView extends Component {
  render() {
    return (
      <Text elem="h1">
        {this.props.Language.t('global.hello')} {this.props.location.pathname}
      </Text>
    );
  }
}

export default withConfig(GenericPageView);
