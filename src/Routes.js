import React, { Suspense, PureComponent } from 'react';
import { matchPath } from 'react-router';
import { Route } from 'react-router-dom';
import { RoutesContext } from 'config';

import getRoutes from 'utils/getRoutes';
import get from 'utils/get';

class RouteScrolling extends PureComponent {
  state = {
    pathnameToReturnToAfterAuth: null
  };

  routeIsInAuthFlow(pathname) {
    const routesInAuthFlow = [
      getRoutes().AUTH,
      getRoutes().LOGIN,
      getRoutes().RESET,
      getRoutes().SIGNUP,
      getRoutes().DASHBOARD
    ];

    return routesInAuthFlow.some(route => route === pathname);
  }

  shouldScrollToTop(prevProps) {
    const pathname = get(this, 'props.location.pathname');
    const prevPathname = get(prevProps, 'location.pathname');

    if (
      matchPath(pathname, getRoutes().MENUS) &&
      matchPath(prevPathname, getRoutes().MENUS)
    ) {
      return false;
    }

    return true;
  }

  returnUserToOrderAfterSuccessfulAuth(prevProps) {
    const history = get(this, 'props.history');
    const pathname = get(this, 'props.location.pathname');
    const prevPathname = get(prevProps, 'location.pathname');

    // Saves pathname of location previous to entering auth cycle
    if (
      pathname === getRoutes().AUTH &&
      !this.routeIsInAuthFlow(prevPathname) &&
      !this.state.pathnameToReturnToAfterAuth
    ) {
      return this.setState({ pathnameToReturnToAfterAuth: prevPathname });
    }

    // Pushes user to pathname if auth succeeds and return path is set
    if (
      pathname === getRoutes().DASHBOARD &&
      this.state.pathnameToReturnToAfterAuth
    ) {
      return history.push(this.state.pathnameToReturnToAfterAuth);
    }

    // Resets return path if user successfully returns to path
    // or user abandons auth flow
    if (
      this.routeIsInAuthFlow(prevPathname) &&
      !this.routeIsInAuthFlow(pathname)
    ) {
      return this.setState({ pathnameToReturnToAfterAuth: null });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.shouldScrollToTop(prevProps)) window.scrollTo(0, 0);

    this.returnUserToOrderAfterSuccessfulAuth(prevProps);
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
                <Suspense
                  fallback={<h1>Loading Components for this route...</h1>}
                >
                  <Route
                    key={path}
                    path={path}
                    exact={exact}
                    component={component}
                  />
                </Suspense>
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
