import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { QuantitySpinner } from 'components';
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
      <QuantitySpinner
        quantity={
          this.props.isDisabled ? this.props.quantity : this.state.quantity
        }
        max={this.props.max}
        handleDecrement={this.decrement}
        handleIncrement={this.increment}
        isDisabled={this.props.isDisabled}
      />
    );
  }
}

storiesOf('QuantitySpinner', module)
  .add('default', () => <QuantitySpinnerParent />, addons)
  .add('default with max of 3', () => <QuantitySpinnerParent max={3} />, addons)
  .add(
    'disabled with quantity of 1',
    () => <QuantitySpinnerParent isDisabled={true} quantity={1} />,
    addons
  );
