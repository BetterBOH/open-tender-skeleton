import React from 'react';
import { LocalesContext } from 'config';

const withLocales = Component =>
  React.memo(props => {
    const Provider = props.LocalesProvider
      ? props.LocalesProvider
      : LocalesContext;

    return (
      <Provider.Consumer>
        {context => <Component {...props} localesContext={context} />}
      </Provider.Consumer>
    );
  });

export default withLocales;
