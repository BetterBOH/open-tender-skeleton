import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConfigContext } from 'config';

import get from 'utils/get';

export const Routes = ({ location }) => (
  <ConfigContext.Consumer>
    {context => {
      const routes = Object.entries(get(context, 'registry.routes', {})).reduce(
        (validRoutes, [key, route]) => {
          if (typeof route === 'object') {
            const { path, component } = route;

            if (path && component && typeof component === 'function') {
              validRoutes.push({
                key,
                path,
                component: React.lazy(component)
              });
            } else {
              throw new Error(
                `Open Tender Skeleton: Your registry.routes.${key} must have a valid path and a valid component. Your path must return a string and your component must return a function with the dynamic import syntax.`
              );
            }
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
