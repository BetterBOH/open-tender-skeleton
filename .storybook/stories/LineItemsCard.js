import React, { Component } from 'react';
import get from 'utils/get';
import cloneDeep from 'utils/cloneDeep';
import isEqual from 'utils/isEqual';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import { customer, lineItemsData } from 'constants/Mocks';

import { LineItemsCard } from 'components';
import documentation from 'components/LineItemsCard/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// mock parent element
class LineItemsCardParent extends Component {
  state = { data: lineItemsData };

  componentDidUpdate(prevProps, prevState) {
    // remove item if quantity is less than 1 and showItemsWithoutQuantity is false
    if (
      !get(this, 'props.showItemsWithoutQuantity') &&
      !isEqual(get(prevState, 'data'), get(this, 'state.data'))
    ) {
      const lineItemsData = get(this, 'state.data').filter(
        item => item.quantity > 0
      );
      this.setState({ data: lineItemsData });
    }
  }

  increment = itemToIncrement => {
    this.setState(prevState => {
      const itemsData = prevState.data.map(item => cloneDeep(item));
      const matchedItemIndex = itemsData.findIndex(
        item => item.uuid === itemToIncrement.uuid
      );
      itemsData[matchedItemIndex].quantity += 1;
      return { data: itemsData };
    });
  };

  decrement = itemToDecrement => {
    this.setState(prevState => {
      const itemsData = prevState.data.map(item => cloneDeep(item));
      const matchedItemIndex = itemsData.findIndex(
        item => item.uuid === itemToDecrement.uuid
      );
      itemsData[matchedItemIndex].quantity -= 1;
      return { data: itemsData };
    });
  };

  render() {
    return (
      <LineItemsCard
        items={this.state.data}
        handleDecrement={this.decrement}
        handleIncrement={this.increment}
        isConfigurable={this.props.isConfigurable}
        showItemsWithoutQuantity={this.props.showItemsWithoutQuantity}
        customer={customer}
      />
    );
  }
}

storiesOf('LineItemsCard', module)
  .add(
    'configurable, remove items with 0 quantity (cart)',
    () => (
      <LineItemsCardParent
        isConfigurable={true}
        showItemsWithoutQuantity={false}
      />
    ),
    addons
  )
  .add(
    'configurable, show items with 0 quantity (menu)',
    () => (
      <LineItemsCardParent
        isConfigurable={true}
        showItemsWithoutQuantity={true}
      />
    ),
    addons
  )
  .add(
    'not configurable (checkout, past order)',
    () => <LineItemsCardParent isConfigurable={false} />,
    addons
  );
