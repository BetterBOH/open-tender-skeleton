import React, { Component } from 'react';
import Polyglot from 'node-polyglot';
import { Router } from 'react-router-dom';
import {
  defaultConfig,
  ConfigContext,
  BrandContext,
  ComponentsContext,
  RoutesContext,
  StoreContext,
  LocalesContext,
  MapboxContext,
  SentryContext
} from 'config';

import StoreProvider from 'state/Provider';
import { store, history } from 'state/store';

import Locales from 'constants/Locales';
import { EN_US } from 'constants/LocaleCodes';

import App from 'App';
import ErrorBoundary from 'lib/ErrorBoundary';
import get from 'utils/get';
import { setConfig } from 'lib/MutableConfig';
import ConfigKeys from 'constants/ConfigKeys';

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
    const sentryRegistry = get(props, 'config.sentry', {});

    this.config = {};
    this.config[ConfigKeys.CONFIG] = openTenderRegistry;
    this.config[ConfigKeys.MAPBOX] = {
      ...defaultConfig.mapbox,
      ...mapboxRegistry
    };

    this.config[ConfigKeys.SENTRY] = {
      ...defaultConfig.sentry,
      ...sentryRegistry
    };

    this.config[ConfigKeys.COMPONENTS] = {
      components: {
        ...defaultConfig.registry.components,
        ...componentRegistry
      }
    };

    this.config[ConfigKeys.BRAND] = {
      ...defaultConfig.brand,
      ...brandRegistry
    };

    this.config[ConfigKeys.ROUTES] = {
      ...defaultConfig.registry.routes,
      ...routesRegistry
    };

    const altStore = get(stateRegistry, 'store');
    const altHistory = get(stateRegistry, 'history');

    this.config[ConfigKeys.STATE] = {
      store: altStore && altHistory ? altStore : store,
      history: altStore && altHistory ? altHistory : history
    };

    this.config[ConfigKeys.LOCALES] = {
      ...Locales,
      ...localesRegistry
    };

    const defaultLanguage = EN_US;
    this.config[ConfigKeys.LOCALES].Language = new Polyglot({
      defaultLanguage
    });
    this.config[ConfigKeys.LOCALES].Language.extend(
      this.config[ConfigKeys.LOCALES][defaultLanguage]
    );

    Object.entries(this.config).forEach(([key, value]) =>
      setConfig(key, value)
    );
  }

  render() {
    return (
      <SentryContext.Provider value={this.config[ConfigKeys.SENTRY]}>
        <ConfigContext.Provider value={this.config[ConfigKeys.CONFIG]}>
          <BrandContext.Provider value={this.config[ConfigKeys.BRAND]}>
            <ComponentsContext.Provider
              value={this.config[ConfigKeys.COMPONENTS]}
            >
              <RoutesContext.Provider value={this.config[ConfigKeys.ROUTES]}>
                <StoreContext.Provider value={this.config[ConfigKeys.STATE]}>
                  <LocalesContext.Provider
                    value={this.config[ConfigKeys.LOCALES]}
                  >
                    <MapboxContext.Provider
                      value={this.config[ConfigKeys.MAPBOX]}
                    >
                      <ErrorBoundary>
                        <StoreProvider>
                          <Router
                            history={this.config[ConfigKeys.STATE].history}
                          >
                            <App />
                          </Router>
                        </StoreProvider>
                      </ErrorBoundary>
                    </MapboxContext.Provider>
                  </LocalesContext.Provider>
                </StoreContext.Provider>
              </RoutesContext.Provider>
            </ComponentsContext.Provider>
          </BrandContext.Provider>
        </ConfigContext.Provider>
      </SentryContext.Provider>
    );
  }
}

export default Skeleton;
