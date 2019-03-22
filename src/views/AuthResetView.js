import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { AuthResetPassword, BackButton } from 'components';

class AuthResetView extends PureComponent {
  render() {
    const {
      actions,
      userIsAuthenticated,
      openTenderRef,
      attemptedEmail,
      token
    } = this.props;

    if (userIsAuthenticated) return <Redirect to="/dashboard" />;

    return (
      <main className="AuthView__container container relative flex items-center">
        <div className="col-12 md:col-5 lg:col-4 md:ml4 p1">
          <AuthResetPassword
            attemptedEmail={attemptedEmail}
            actions={actions}
            openTenderRef={openTenderRef}
            token={token}
          />
          <BackButton
            className="absolute b0 r0 m1"
            onClick={this.props.history.goBack}
          />
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(AuthResetView));
