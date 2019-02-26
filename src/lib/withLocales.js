import React from 'react';
import { LocalesContext } from 'config';

const withLocales = Component =>
  React.memo(props => (
    <LocalesContext.Consumer>
      {context => <Component {...props} localesContext={context} />}
    </LocalesContext.Consumer>
  ));

export default withLocales;
