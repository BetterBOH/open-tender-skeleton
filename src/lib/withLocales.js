import React from 'react';
import { LocalesContext } from 'config';

const withLocales = Component => props => (
  <LocalesContext.Consumer>
    {context => <Component {...props} {...context} />}
  </LocalesContext.Consumer>
);

export default withLocales;
