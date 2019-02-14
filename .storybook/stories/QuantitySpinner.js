import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import BrandStyle from 'lib/BrandStyle';
import { brand } from '../brand';

import QuantitySpinner from 'components/QuantitySpinner';
import documentation from 'components/QuantitySpinner/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// mock parent element
class QuantitySpinnerParent extends Component {
  state = { quantity: 0 };

  increment = () => {
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
  };

  render() {
    return (
      <React.Suspense fallback={<div />}>
        <QuantitySpinner
          quantity={this.state.quantity}
          max={this.props.max}
          handleDecrement={this.decrement}
          handleIncrement={this.increment}
        />
      </React.Suspense>
    );
  }
}

storiesOf('QuantitySpinner', module)
  .addDecorator(checkA11y)
  .add(
    'default',
    () => (
      <React.Suspense fallback={<div />}>
        <BrandStyle brand={brand} />
        <QuantitySpinnerParent />
      </React.Suspense>
    ),
    addons
  )
  .add(
    'default with max of 3',
    () => (
      <React.Suspense fallback={<div />}>
        <BrandStyle brand={brand} />
        <QuantitySpinnerParent max={3} />
      </React.Suspense>
    ),
    addons
  );
