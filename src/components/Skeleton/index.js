import React, { Component } from 'react';
import get from 'utils/get';
import { defaultConfig, ConfigContext } from 'config';
import Provider from 'state/Provider';
import Routes from 'routes';

export default class extends Component {
  constructor(props) {
    super(...arguments);

    const componentRegistry = get(props, 'config.registry.components', {});
    const viewRegistry = get(props, 'config.registry.views', {});
    const stateRegistry = get(props, 'config.registry.state', {});
    const routesRegistry = get(props, 'config.registry.routes', {});

    this.config = {
      registry: {
        components: {
          ...defaultConfig.registry.components,
          ...componentRegistry
        },
        views: {
          ...defaultConfig.registry.views,
          ...viewRegistry
        },
        state: {
          ...stateRegistry
        },
        routes: {
          ...defaultConfig.registry.routes,
          ...routesRegistry
        }
      }
    };
  }

  render() {
    return (
      <ConfigContext.Provider value={this.config}>
        <Provider>
          <Routes />
        </Provider>
      </ConfigContext.Provider>
    );
  }
}
