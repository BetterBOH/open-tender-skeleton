import React from 'react';

import Polyglot from 'node-polyglot';
import Locales from 'constants/Locales';
import { EN_US } from 'constants/LocaleCodes';

import { store, history } from 'state/store';

export const mockHostConfig = {
  brand: {
    backgroundImage:
      'http://tacombi.com/system/uploads/gallery_image/image/40/gallery-events-tacombi-flatiron.jpg',
    logoImage:
      'https://s3.amazonaws.com/betterboh/u/img/prod/51/1509669369_tacombi-logo_500x129.png',
    brandColor: '#68070A',
    textColor: 'white',
    links: [
      {
        name: 'Privacy Policy',
        url: '/privacy-policy'
      },
      {
        name: 'Terms of Use',
        url: '/terms'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com'
      }
    ],
    theme: 'dark',
    // prettier-ignore
    colors: {
      'brand-color-light': '#ce0901',
      'brand-color-dark': '#68070a',
      black: '#1f2933',
      white: '#fff',
      'gray-lighter': '#f5f7fa',
      'gray-light': '#cbd2d9',
      gray: '#616e7c',
      'gray-dark': '#3e4c59',
      'white-overlay': 'rgba(255, 255, 255, 0.75)',
      'black-overlay': 'rgba(0, 0, 0, 0.1)',
      success: '#51dc8e',
      warning: '#ffbe4f',
      error: '#e20f0f'
    }
  },
  registry: {
    components: {}
  },
  locales: {},
  openTenderConfig: {
    apiKey: process.env.REACT_APP_OPEN_TENDER_API_KEY,
    brandId: process.env.REACT_APP_OPEN_TENDER_BRAND,
    origin: process.env.REACT_APP_OPEN_TENDER_ORIGIN,
    apiEndpoint: process.env.REACT_APP_OPEN_TENDER_API_ENDPOINT
  },
  mapbox: {
    mapboxApiKey: process.env.REACT_APP_MAPBOX_API_KEY,
    mapboxStyleUrl: process.env.REACT_APP_MAPBOX_STYLE_URL
  },
  state: {
    store,
    history
  }
};

export const defaultConfig = {
  brand: {
    backgroundImage: '',
    logoImage: '',
    links: [
      {
        name: 'Privacy Policy',
        url: '/privacy-policy'
      },
      {
        name: 'Terms of Use',
        url: '/terms'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com'
      }
    ],
    theme: 'dark',
    // prettier-ignore
    colors: {
      'brand-color-light': '#ce0901',
      'brand-color-dark': '#68070a',
      black: '#1f2933',
      white: '#fff',
      'gray-lighter': '#f5f7fa',
      'gray-light': '#cbd2d9',
      gray: '#616e7c',
      'gray-dark': '#3e4c59',
      'white-overlay': 'rgba(255, 255, 255, 0.75)',
      'black-overlay': 'rgba(0, 0, 0, 0.1)',
      success: '#51dc8e',
      warning: '#ffbe4f',
      error: '#e6142c'
    }
  },
  registry: {
    components: {},
    routes: {
      welcome: {
        path: '/',
        exact: true,
        component: () => import('containers/WelcomeContainer')
      }
    }
  }
};

// Registries
export const configRegistry = mockHostConfig.openTenderConfig;
export const componentRegistry = {
  ...defaultConfig.registry.components,
  ...mockHostConfig.registry.components
};
export const brandRegistry = {
  ...defaultConfig.brand,
  ...mockHostConfig.brand
};
export const stateRegistry = {
  ...defaultConfig.state,
  ...mockHostConfig.state
};
export const routesRegistry = {
  ...defaultConfig.registry.routes,
  ...mockHostConfig.registry.routes
};
export const mapboxRegistry = mockHostConfig.mapbox;
const localesRegistry = {
  ...Locales,
  ...mockHostConfig.locales
};
const defaultLanguage = EN_US;
localesRegistry.Language = new Polyglot({ defaultLanguage });
localesRegistry.Language.extend(localesRegistry[defaultLanguage]);
export { localesRegistry };

// Contexts
export const ConfigContext = React.createContext(configRegistry);
export const LocalesContext = React.createContext(localesRegistry);
export const RoutesContext = React.createContext(routesRegistry);
export const StoreContext = React.createContext(stateRegistry);
export const ComponentsContext = React.createContext(componentRegistry);
export const BrandContext = React.createContext(brandRegistry);
export const MapboxContext = React.createContext(mapboxRegistry);
