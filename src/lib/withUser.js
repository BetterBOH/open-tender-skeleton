import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { userIsAuthenticated } from 'state/selectors';

const withUser = WrappedComponent => {
  class WithUser extends PureComponent {
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