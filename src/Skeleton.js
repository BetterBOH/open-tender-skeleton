import React, { Component } from 'react';
import Polyglot from 'node-polyglot';
import {
  defaultConfig,
  ConfigContext,
  ComponentsContext,
  RoutesContext,
  StoreContext,
  LocalesContext
} from 'config';

import StoreProvider from 'state/Provider';
import { Route } from 'react-router-dom';

import Locales from 'constants/Locales';
import { EN_US } from 'constants/LocaleCodes';

import App from 'App';
import get from 'utils/get';

class Skeleton extends Component {
  constructor(props) {
    super(...arguments);

    const componentRegistry = get(props, 'config.registry.components', {});
    const stateRegistry = get(props, 'config.registry.state', {});
    const routesRegistry = get(props, 'config.registry.routes', {});
    const localesRegistry = get(props, 'config.locales', {});
    const openTenderRegistry = get(props, 'config.openTenderConfig', {});

    this.configRegistry = openTenderRegistry;

    this.componentRegistry = {
      ...defaultConfig.registry.components,
      ...componentRegistry
    };

    this.routesRegistry = {
      ...defaultConfig.registry.routes,
      ...routesRegistry
    };

    this.storeRegistry = {
      ...stateRegistry
    };

    this.localesRegistry = {
      ...Locales,
      ...localesRegistry
    };

    const defaultLanguage = EN_US;
    this.localesRegistry.Language = new Polyglot({ defaultLanguage });
    this.localesRegistry.Language.extend(this.localesRegistry[defaultLanguage]);
  }

  render() {
    return (
      <ConfigContext.Provider value={this.configRegistry}>
        <ComponentsContext.Provider value={this.componentRegistry}>
          <RoutesContext.Provider value={this.routesRegistry}>
            <StoreContext.Provider value={this.storeRegistry}>
              <LocalesContext.Provider value={this.localesRegistry}>
                <StoreProvider>
                  <Route component={App} />
                </StoreProvider>
              </LocalesContext.Provider>
            </StoreContext.Provider>
          </RoutesContext.Provider>
        </ComponentsContext.Provider>
      </ConfigContext.Provider>
    );
  }
}

export default Skeleton;
