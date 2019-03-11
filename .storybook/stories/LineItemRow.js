import React, { Component } from 'react';
import cloneDeep from 'utils/cloneDeep';
import { storiesOf } from '@storybook/react';

import { lineItemsData } from 'constants/Mocks';

import { LineItemRow } from 'components';
import documentation from 'components/LineItemRow/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// mock parent element
class LineItemRowParent extends Component {
  state = { data: lineItemsData };

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
      <div>
        {this.state.data.map(item => (
          <LineItemRow
            key={item.uuid}
            lineItem={item}
            isConfigurable={this.props.isConfigurable}
            handleDecrement={() => this.decrement(item)}
            handleIncrement={() => this.increment(item)}
          />
        ))}
      </div>
    );
  }
}

storiesOf('LineItemRow', module)
  .add(
    'default (configurable)',
    () => <LineItemRowParent isConfigurable={true} />,
    addons
  )
  .add(
    'not configurable',
    () => <LineItemRowParent isConfigurable={false} />,
    addons
  );
