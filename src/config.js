import React from 'react';
import WelcomeContainer from 'containers/WelcomeContainer';

export const defaultConfig = {
  registry: {
    components: {
      // defaults provided in wrapper files
    },
    routes: {
      welcome: {
        path: '/',
        exact: true,
        component: WelcomeContainer
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
