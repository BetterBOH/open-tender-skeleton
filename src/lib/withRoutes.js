import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RoutesContext } from 'config';
import { RoutesContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withRoutes = WrappedComponent => {
  class ComponentWithRoutesContext extends Component {
    static propTypes = {
      routesContext: PropTypes.shape({
        welcome: PropTypes.shape({
          path: PropTypes.string,
          exact: PropTypes.bool,
          component: PropTypes.func
        }),
        auth: PropTypes.shape({
          path: PropTypes.string,
          exact: PropTypes.bool,
          component: PropTypes.func
        }),
        signup: PropTypes.shape({
          path: PropTypes.string,
          exact: PropTypes.bool,
          component: PropTypes.func
        }),
        login: PropTypes.shape({
          path: PropTypes.string,
          exact: PropTypes.bool,
          component: PropTypes.func
        }),
        reset: PropTypes.shape({
          path: PropTypes.string,
          exact: PropTypes.bool,
          component: PropTypes.func
        }),
        dashboard: PropTypes.shape({
          path: PropTypes.string,
          exact: PropTypes.bool,
          component: PropTypes.func
        }),
        locations: PropTypes.shape({
          path: PropTypes.string,
          exact: PropTypes.bool,
          component: PropTypes.func
        }),
        menus: PropTypes.shape({
          path: PropTypes.string,
          exact: PropTypes.bool,
          component: PropTypes.func
        }),
        checkout: PropTypes.shape({
          path: PropTypes.string,
          exact: PropTypes.bool,
          component: PropTypes.func
        }),
        orderSummary: PropTypes.shape({
          path: PropTypes.string,
          exact: PropTypes.bool,
          component: PropTypes.func
        })
      }),
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      routesContext: null,
      ...WrappedComponent.defaultProps
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const Context = environmentIsMock() ? MockContext : RoutesContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => (
        <ComponentWithRoutesContext {...props} routesContext={context} />
      )}
    </Context.Consumer>
  ));
};

export default withRoutes;
