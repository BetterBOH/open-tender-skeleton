import React, { Component } from 'react';
import Polyglot from 'node-polyglot';
import {
  defaultConfig,
  ConfigContext,
  BrandContext,
  ComponentsContext,
  RoutesContext,
  StoreContext,
  LocalesContext
} from 'config';

import StoreProvider from 'state/Provider';
import { store, history } from 'state/store';
import { Route } from 'react-router-dom';

import Locales from 'constants/Locales';
import { EN_US } from 'constants/LocaleCodes';

import App from 'App';
import get from 'utils/get';
import { MapboxContext } from './config';

class Skeleton extends Component {
  constructor(props) {
    super(...arguments);

    const componentRegistry = get(props, 'config.registry.components', {});
    const brandRegistry = get(props, 'config.brand', {});
    const stateRegistry = get(props, 'config.registry.state', {});
    const routesRegistry = get(props, 'config.registry.routes', {});
    const localesRegistry = get(props, 'config.locales', {});
    const openTenderRegistry = get(props, 'config.openTenderConfig', {});
    const mapboxRegistry = get(props, 'config.mapbox', {});

    this.configRegistry = openTenderRegistry;
    this.mapboxRegistry = mapboxRegistry;

    this.componentRegistry = {
      ...defaultConfig.registry.components,
      ...componentRegistry
    };

    this.brandRegistry = {
      ...defaultConfig.brand,
      ...brandRegistry
    };

    this.routesRegistry = {
      ...defaultConfig.registry.routes,
      ...routesRegistry
    };

    const altStore = get(stateRegistry, 'store');
    const altHistory = get(stateRegistry, 'history');
    this.storeRegistry = {
      store: altStore && altHistory ? altStore : store,
      history: altStore && altHistory ? altHistory : history
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
        <BrandContext.Provider value={this.brandRegistry}>
          <ComponentsContext.Provider value={this.componentRegistry}>
            <RoutesContext.Provider value={this.routesRegistry}>
              <StoreContext.Provider value={this.storeRegistry}>
                <LocalesContext.Provider value={this.localesRegistry}>
                  <MapboxContext.Provider value={this.mapboxRegistry}>
                    <StoreProvider>
                      <Route component={App} />
                    </StoreProvider>
                  </MapboxContext.Provider>
                </LocalesContext.Provider>
              </StoreContext.Provider>
            </RoutesContext.Provider>
          </ComponentsContext.Provider>
        </BrandContext.Provider>
      </ConfigContext.Provider>
    );
  }
}

export default Skeleton;
