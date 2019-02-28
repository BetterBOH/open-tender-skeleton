import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { AuthResetPassword } from 'components';

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
      <main className="container relative">
        <div className="p1 col-12 md:col-4">
          <AuthResetPassword
            attemptedEmail={attemptedEmail}
            actions={actions}
            openTenderRef={openTenderRef}
            token={token}
          />
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(AuthResetView));
