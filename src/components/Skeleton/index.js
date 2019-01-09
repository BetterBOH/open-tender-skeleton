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
      <Provider>
        <ConfigContext.Provider value={this.config}>
          <Routes />
        </ConfigContext.Provider>
      </Provider>
    );
  }
}
