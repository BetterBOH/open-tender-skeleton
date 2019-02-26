import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { AuthLogin } from 'components';

class AuthLoginView extends PureComponent {
  render() {
    const {
      actions,
      userIsAuthenticated,
      openTenderRef,
      attemptedEmail
    } = this.props;

    if (userIsAuthenticated) return <Redirect to="/dashboard" />;

    return (
      <main className="container relative">
        <div className="p1 col-12 md:col-4">
          <AuthLogin
            attemptedEmail={attemptedEmail}
            actions={actions}
            openTenderRef={openTenderRef}
          />
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(AuthLoginView));
