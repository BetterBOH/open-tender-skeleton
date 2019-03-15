import React from 'react';

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
    },
    paymentTypes: {
      credit: {
        logoImage: `localhost:3000/assets/creditCard.png`
      }
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
        component: () => import('containers/WelcomeContainer')
      },
      auth: {
        path: '/auth',
        exact: true,
        component: () => import('containers/AuthContainer')
      },
      signup: {
        path: '/auth/signup',
        exact: true,
        component: () => import('containers/AuthSignupContainer')
      },
      login: {
        path: '/auth/login',
        exact: true,
        component: () => import('containers/AuthLoginContainer')
      },
      reset: {
        path: '/auth/reset',
        exact: true,
        component: () => import('containers/AuthResetContainer')
      },
      dashboard: {
        path: '/dashboard',
        exact: true,
        component: () => import('containers/DashboardContainer')
      },
      locations: {
        path: '/locations',
        exact: true,
        component: () => import('containers/LocationsContainer')
      },
      menus: {
        path: '/menus/:locationId/:lineItemUuid?',
        basename: '/menus',
        component: () => import('containers/MenuContainer')
      },
      checkout: {
        path: '/checkout',
        exact: true,
        component: () => import('containers/CheckoutContainer')
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
