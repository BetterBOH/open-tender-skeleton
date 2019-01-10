import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GenericPageContainer from 'containers/GenericPageContainer';

const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path="/" component={GenericPageContainer} />
  </Switch>
);

export default Routes;
