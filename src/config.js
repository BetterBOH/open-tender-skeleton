import React from 'react';
import { locationIcon, selectedLocationIcon, userIcon } from 'assets';

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
      'brand-color-light': '#ce0901',
      'brand-color-dark': '#68070a',
      'black': '#4a4a4a',
      'white': '#fff',
      'gray-light': '#f1f3f8',
      'gray': '#cdcdd7',
      'gray-dark': '#8d92a3',
      'white-overlay': 'rgba(255, 255, 255, 0.9)',
      'black-overlay': 'rgba(0, 0, 0, 0.1)',
      'success': '#51dc8e',
      'warning': '#ffbe4f',
      'error': '#ef4b5f'
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
      pickup: {
        path: '/pickup',
        exact: true,
        component: LocationsContainer
      },
      delivery: {
        path: '/delivery',
        exact: true,
        component: LocationsContainer
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
        basename: '/orders',
        exact: true,
        component: OrderSummaryContainer
      }
    }
  },
  mapbox: {
    icons: {
      'user-icon': userIcon,
      'location-icon': locationIcon,
      'selected-location-icon': selectedLocationIcon
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
