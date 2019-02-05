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
      }
      // login: {
      //   path: '/login',
      //   exact: true,
      //   component: () => import('containers/GenericPageContainer')
      // },
      // locations: {
      //   path: '/locations',
      //   component: () => import('containers/GenericPageContainer')
      // },
      // menu: {
      //   path: '/menu',
      //   exact: true,
      //   component: () => import('containers/GenericPageContainer')
      // },
      // cart: {
      //   path: '/cart',
      //   exact: true,
      //   component: () => import('containers/GenericPageContainer')
      // },
      // checkout: {
      //   path: '/checkout',
      //   exact: true,
      //   component: () => import('containers/GenericPageContainer')
      // },
      // orders: {
      //   path: '/orders',
      //   component: () => import('containers/GenericPageContainer')
      // },
      // dashboard: {
      //   path: '/dashboard',
      //   exact: true,
      //   component: () => import('containers/GenericPageContainer')
      // },
      // feedback: {
      //   path: '/feedback',
      //   exact: true,
      //   component: () => import('containers/GenericPageContainer')
      // }
    }
  }
};

export const ConfigContext = React.createContext(defaultConfig);
export const LocalesContext = React.createContext(defaultConfig);
export const RoutesContext = React.createContext(defaultConfig);
export const StoreContext = React.createContext(defaultConfig);
export const ComponentsContext = React.createContext(defaultConfig);
export const BrandContext = React.createContext(defaultConfig);
