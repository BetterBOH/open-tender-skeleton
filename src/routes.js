import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConfigContext } from 'config';

import get from 'utils/get';

export const Routes = ({ location }) => (
  <ConfigContext.Consumer>
    {context => {
      const routes = Object.values(get(context, 'registry.routes', {})).reduce(
        (validRoutes, route) => {
          if (typeof route === 'object') {
            const { path, component } = route;
            if (path && component)
              validRoutes.push({
                path,
                key: path,
                component: React.lazy(component)
              });
          }

          return validRoutes;
        },
        []
      );

      if (routes.length) {
        return (
          <Switch location={location}>
            <React.Suspense fallback={<div>Loading...</div>}>
              {routes.map(route => {
                return <Route exact {...route} />;
              })}
            </React.Suspense>
          </Switch>
        );
      } else {
        throw new Error(
          `Open Tender Skeleton: Your registry.routes must return an object of routes.`
        );
      }
    }}
  </ConfigContext.Consumer>
);

export default Routes;
