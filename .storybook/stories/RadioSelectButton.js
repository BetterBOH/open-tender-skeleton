import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import currency from 'currency.js';

import { RadioSelectButton, Text } from 'components';
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

  createButtonChildren = item => (
    <div className="RadioSelectButton__inner flex items-center">
      <div className="RadioSelectButton__bubble color-black radius-lg text-bold flex justify-center items-center col-1 mr1">
        <Text size="small" className="uppercase">
          {item.size.charAt(0)}
        </Text>
      </div>
      <div className="RadioSelectButton__text color-gray-dark">
        <div className="RadioSelectButton__labels flex color-black uppercase letter-spacing-xs">
          <Text size="label-detail" className="text-bold mr1">
            {currency(item.price, {
              formatWithSymbol: true
            }).format()}
          </Text>
          <Text size="label-detail">{`${item.calories} cal`}</Text>
        </div>
        <Text size="description" className="capitalize">
          {item.size}
        </Text>
      </div>
    </div>
  );

  render() {
    return (
      <div className="m1">
        {this.props.items.map(item => (
          <RadioSelectButton
            variant={this.props.variant}
            key={item.id}
            id={item.id}
            name={item.size}
            children={this.createButtonChildren(item)}
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

storiesOf('RadioSelectButton', module)
  .add(
    'default (list)',
    () => <RadioSelectButtonParent items={mockItemData} />,
    addons
  )
  .add(
    'standalone',
    () => <RadioSelectButtonParent variant="standalone" items={mockItemData} />,
    addons
  );
