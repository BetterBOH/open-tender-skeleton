import React, { Component } from 'react';
import Polyglot from 'node-polyglot';

import get from 'utils/get';
import { defaultConfig, ConfigContext } from 'config';
import Provider from 'state/Provider';
import Routes from 'Routes';
import Locales from 'constants/Locales';

import { EN_US } from 'constants/LocaleCodes';

class Skeleton extends Component {
  constructor(props) {
    super(...arguments);

    const componentRegistry = get(props, 'config.registry.components', {});
    const viewRegistry = get(props, 'config.registry.views', {});
    const stateRegistry = get(props, 'config.registry.state', {});
    const routesRegistry = get(props, 'config.registry.routes', {});
    const localesRegistry = get(props, 'config.locales', {});
    const openTenderRegistry = get(props, 'config.openTender', {});

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
      },
      locales: {
        ...Locales,
        ...localesRegistry
      },
      openTender: openTenderRegistry
    };

    const defaultLanguage = EN_US;
    this.config.Language = new Polyglot({ defaultLanguage });
    this.config.Language.extend(this.config.locales[defaultLanguage]);
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

export default Skeleton;
