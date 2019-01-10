import React, { Component } from 'react';
import Loader from 'components/Loader';

const Text = React.lazy(() => import('components/Text'));

class GenericPageView extends Component {
  render() {
    return (
      <React.Suspense fallback={<Loader />}>
        <Text elem="h1">Hello, World!</Text>
      </React.Suspense>
    );
  }
}

export default GenericPageView;
