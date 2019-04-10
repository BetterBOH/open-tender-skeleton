import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthEmailCheck, BackButton } from 'components';

class AuthView extends PureComponent {
  render() {
    const { actions, userIsAuthenticated, openTenderRef } = this.props;

    if (userIsAuthenticated) return <Redirect to="/dashboard" />;

    return (
      <main className="AuthView__container container relative flex items-center">
        <div className="col-12 md:col-5 lg:col-4 md:ml4 p1">
          <AuthEmailCheck actions={actions} openTenderRef={openTenderRef} />
        </div>
        <BackButton
          className="absolute b0 r0 m1"
          onClick={this.props.history.goBack}
        />
      </main>
    );
  }
}

export default AuthView;
