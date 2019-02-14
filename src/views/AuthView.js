import React, { Component } from 'react';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { Card, Text, Button } from 'components';

class AuthView extends Component {
  state = {
    email: ''
  };

  handleCheckEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleCheckEmailClick = () => {
    const { actions, openTenderRef } = this.props;

    actions.validateUser(openTenderRef, this.state.email);
  };

  render() {
    return (
      <main className="container relative">
        <div className="p1 col-12 md:col-4">
          <Card className="p1">
            <Text size="headline">Login</Text>
            <form>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleCheckEmailChange}
              />
              <Button onClick={this.handleCheckEmailClick}>Check Email</Button>
            </form>
          </Card>
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(AuthView));
