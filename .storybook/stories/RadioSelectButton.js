import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import currency from 'currency.js';

import { RadioSelectButton } from 'components';
import documentation from 'components/RadioSelectButton/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

const mockItemData = [
  { id: 501, size: 'small', price: '3.95', calories: '260' },
  { id: 502, size: 'medium', price: '5.20', calories: '350' },
  { id: 503, size: 'large', price: '8.50', calories: '500' }
];

// mock parent element
class RadioSelectButtonParent extends Component {
  state = {
    selected: null
  };

  handleSelect = item => {
    this.setState({
      selected: item
    });
  };

  render() {
    return (
      <div className="m1">
        {this.props.items.map(item => (
          <RadioSelectButton
            key={item.id}
            id={item.id}
            text={item.size}
            labelBold={currency(item.price, {
              formatWithSymbol: true
            }).format()}
            labelRegular={`${item.calories} cal`}
            isSelected={
              this.state.selected ? this.state.selected.id === item.id : false
            }
            onClick={() => this.handleSelect(item)}
          />
        ))}
      </div>
    );
  }
}

storiesOf('RadioSelectButton', module).add(
  'default list of buttons',
  () => <RadioSelectButtonParent items={mockItemData} />,
  addons
);
