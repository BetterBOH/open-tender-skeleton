import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userIsAuthenticated } from 'state/selectors';

const withUser = WrappedComponent => {
  class WithUser extends PureComponent {
    static propTypes = {
      userIsAuthenticated: PropTypes.bool,
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      userIsAuthenticated: false,
      ...WrappedComponent.defaultProps
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    userIsAuthenticated: userIsAuthenticated(state)
  });

  return connect(mapStateToProps)(WithUser);
};

export default withUser;
