import React, { Component } from 'react';
import Loader from 'components/Loader';
import Language from 'constants/Language';

const Text = React.lazy(() => import('components/Text'));

class GenericPageView extends Component {
  render() {
    return (
      <React.Suspense fallback={<Loader />}>
        <Text elem="h1">
          {Language.t('global.hello')} {this.props.location.pathname}
        </Text>
      </React.Suspense>
    );
  }
}

export default GenericPageView;
