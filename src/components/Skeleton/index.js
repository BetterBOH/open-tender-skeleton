import React, { Component } from 'react';
import get from 'utils/get';
import { defaultConfig, ConfigContext } from 'config';
import Provider from 'state/Provider';

import Loader from 'components/Loader';

const Text = React.lazy(() => import('components/Text'));

export default class extends Component {
  constructor(props) {
    super(...arguments);

    const componentRegistry = get(props, 'config.registry.components', {});
    const viewRegistry = get(props, 'config.registry.views', {});

    this.config = {
      registry: {
        components: {
          ...defaultConfig.registry.components,
          ...componentRegistry
        },
        views: {
          ...defaultConfig.registry.views,
          ...viewRegistry
        }
      }
    };
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
