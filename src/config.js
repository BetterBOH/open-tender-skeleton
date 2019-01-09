import React from 'react';

export const defaultConfig = {
  registry: {
    components: {},
    views: {},
    routes: {
      welcome: {
        path: '/',
        component: () => import('containers/GenericPageContainer')
      },
      login: {
        path: '/login',
        component: () => import('containers/GenericPageContainer')
      },
      locations: {
        path: '/locations',
        component: () => import('containers/GenericPageContainer')
      },
      menu: {
        path: '/menu',
        component: () => import('containers/GenericPageContainer')
      },
      cart: {
        path: '/cart',
        component: () => import('containers/GenericPageContainer')
      },
      checkout: {
        path: '/checkout',
        component: () => import('containers/GenericPageContainer')
      },
      orders: {
        path: '/orders',
        component: () => import('containers/GenericPageContainer')
      },
      dashboard: {
        path: '/dashboard',
        component: () => import('containers/GenericPageContainer')
      },
      feedback: {
        path: '/feedback',
        component: () => import('containers/GenericPageContainer')
      }
    }
  }
};

export const ConfigContext = React.createContext(defaultConfig);
