import React, { PureComponent } from 'react';
import { matchPath } from 'react-router';
import { Route } from 'react-router-dom';
import { RoutesContext } from 'config';

import getRoutes from 'utils/getRoutes';
import get from 'utils/get';

class RouteScrolling extends PureComponent {
  shouldScrollToTop(nextProps) {
    const pathname = get(this, 'props.location.pathname');
    const nextPathname = get(nextProps, 'location.pathname');

    if (
      matchPath(pathname, getRoutes().MENUS) &&
      matchPath(nextPathname, getRoutes().MENUS)
    ) {
      return false;
    }

    return true;
  }

  componentDidUpdate(nextProps) {
    if (this.shouldScrollToTop(nextProps)) window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

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
                  `Open Tender Skeleton: Your registry.routes.${key} must have a valid path and a valid component. Your path must return a string and your component must return a valid React component.`
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
              <Route component={RouteScrolling} />
              {routes.map(({ path, exact, component }) => (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  component={component}
                />
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
