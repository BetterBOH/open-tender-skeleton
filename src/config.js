import React from 'react';

export const defaultConfig = {
  registry: {
    components: {
      Text: {
        path: ''
      }
    }
  }
};

export const ConfigContext = React.createContext(defaultConfig);
