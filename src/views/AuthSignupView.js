import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthSignup, BackButton } from 'components';

class AuthSignupView extends PureComponent {
  render() {
    const {
      actions,
      userIsAuthenticated,
      openTenderRef,
      attemptedEmail,
      createAndAuthenticateUserStatus
    } = this.props;

    if (userIsAuthenticated) return <Redirect to="/dashboard" />;

    return (
      <main className="AuthView__container container relative flex md:pt4">
        <div className="col-12 md:col-5 lg:col-4 md:ml4 p1">
          <AuthSignup
            attemptedEmail={attemptedEmail}
            actions={actions}
            openTenderRef={openTenderRef}
            createAndAuthenticateUserStatus={createAndAuthenticateUserStatus}
          />
          <BackButton
            className="absolute b0 r0 m1 md:mr3"
            onClick={this.props.history.goBack}
          />
        </div>
      </main>
    );
  }
}

export default AuthSignupView;
