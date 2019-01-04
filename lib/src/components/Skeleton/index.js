import React, { Component } from 'react';
import { defaultConfig, ConfigContext } from '../../config';

import Loader from '../Loader';

const Text = React.lazy(() => import('../Text'));

export default class extends Component {
  render() {
    this.config = Object.assign({}, defaultConfig, this.props.config);

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
