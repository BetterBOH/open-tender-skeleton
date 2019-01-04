import React from 'react';

export const defaultConfig = {
  registry: {
    components: {},
    views: {}
  }
};

export const ConfigContext = React.createContext(defaultConfig);
