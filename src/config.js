import React from 'react';

export const defaultConfig = {
  registry: {
    components: {},
    views: {},
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
