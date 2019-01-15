import React, { Component } from 'react';
import withContext from 'lib/withContext';
import Loader from 'components/Loader';

const Text = React.lazy(() => import('components/Text'));

class GenericPageView extends Component {
  render() {
    return (
      <React.Suspense fallback={<Loader />}>
        <Text elem="h1">
          {this.props.Language.t('global.hello')} {this.props.location.pathname}
        </Text>
      </React.Suspense>
    );
  }
}

export default withContext(GenericPageView);
