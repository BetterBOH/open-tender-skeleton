import React, { Component } from 'react';
import { defaultConfig, ConfigContext } from 'config';

import Loader from 'components/Loader';

const Text = React.lazy(() => import('components/Text'));

export default class extends Component {
  constructor(props) {
    super(...arguments);
    this.config = { ...defaultConfig, ...props.config };
  }

  render() {
    return (
      <ConfigContext.Provider value={this.config}>
        <div className="Skeleton">
          <React.Suspense fallback={<Loader />}>
            <Text elem="h1">Hello, World!</Text>
          </React.Suspense>
        </div>
      </ConfigContext.Provider>
    );
  }
}
