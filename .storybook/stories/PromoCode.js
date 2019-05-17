import React, { Component } from 'react';
import { Status } from 'brandibble-redux';
import { storiesOf } from '@storybook/react';

import { PromoCode } from 'components';
import documentation from 'components/PromoCode/README.md';

const addons = {
  notes: { markdown: documentation }
};

// mock parent element to show error styling
class PromoCodeParent extends Component {
  state = { status: Status.PENDING, error: null };

  setRejectedStateAndError = () => {
    this.setState({
      status: Status.REJECTED,
      error: 'That code is invalid. Sry!!'
    });
  };

  render() {
    return (
      <PromoCode
        setPromoCodeStatus={this.state.status}
        setPromoCodeError={this.state.error}
        handleSubmit={this.setRejectedStateAndError}
      />
    );
  }
}

storiesOf('PromoCode', module).add(
  'default with invalid promo code',
  () => <PromoCodeParent />,
  addons
);
