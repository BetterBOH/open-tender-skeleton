import React from 'react';

import WelcomeContainer from 'containers/WelcomeContainer';
import AuthContainer from 'containers/AuthContainer';
import AuthSignupContainer from 'containers/AuthSignupContainer';
import AuthLoginContainer from 'containers/AuthLoginContainer';
import AuthResetContainer from 'containers/AuthResetContainer';
import DashboardContainer from 'containers/DashboardContainer';
import LocationsContainer from 'containers/LocationsContainer';
import MenuContainer from 'containers/MenuContainer';
import CheckoutContainer from 'containers/CheckoutContainer';
import OrderSummaryContainer from 'containers/OrderSummaryContainer';

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
      'brand-color-light': '#CE0901',
      'brand-color-dark': '#68070A',
      'black': '#22242A',
      'white': '#fff',
      'gray-light': '#CDCDD7',
      'gray': '#8d92a3',
      'gray-dark': '#4a4a4a',
      'white-overlay': 'rgba(255, 255, 255, 0.9)',
      'black-overlay': 'rgba(0, 0, 0, 0.1)'
    }
  },
  registry: {
    components: {
      // defaults provided in wrapper files
    },
    routes: {
      welcome: {
        path: '/',
        exact: true,
        component: WelcomeContainer
      },
      auth: {
        path: '/auth',
        exact: true,
        component: AuthContainer
      },
      signup: {
        path: '/auth/signup',
        exact: true,
        component: AuthSignupContainer
      },
      login: {
        path: '/auth/login',
        exact: true,
        component: AuthLoginContainer
      },
      reset: {
        path: '/auth/reset',
        exact: true,
        component: AuthResetContainer
      },
      dashboard: {
        path: '/dashboard',
        exact: true,
        component: DashboardContainer
      },
      locations: {
        path: '/locations',
        exact: true,
        component: LocationsContainer
      },
      menus: {
        path: '/menus/:locationId/:lineItemUuid?',
        basename: '/menus',
        exact: true,
        component: MenuContainer
      },
      checkout: {
        path: '/checkout',
        exact: true,
        component: CheckoutContainer
      },
      orderSummary: {
        path: '/orders/:orderId',
        exact: true,
        component: OrderSummaryContainer
      }
    }
  }
};

export const ConfigContext = React.createContext(defaultConfig);
export const LocalesContext = React.createContext(defaultConfig);
export const RoutesContext = React.createContext(defaultConfig);
export const StoreContext = React.createContext(defaultConfig);
export const ComponentsContext = React.createContext(defaultConfig);
export const BrandContext = React.createContext(defaultConfig);
export const MapboxContext = React.createContext(defaultConfig);
