import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { RoutesContext } from 'config';

export const Routes = () => {
  return (
    <RoutesContext.Consumer>
      {context => {
        const routes = Object.entries(context).reduce(
          (validRoutes, [key, route]) => {
            if (typeof route === 'object') {
              const { path, component } = route;

              if (path && component && typeof component === 'function') {
                validRoutes.push({
                  ...route,
                  key,
                  component
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
            <React.Fragment>
              {routes.map(({ path, exact, component }) => (
                <Route path={path} exact={exact} component={component} />
              ))}
            </React.Fragment>
          );
        } else {
          throw new Error(
            `Open Tender Skeleton: Your registry.routes must return an object of routes.`
          );
        }
      }}
    </RoutesContext.Consumer>
  );
};

export default Routes;
