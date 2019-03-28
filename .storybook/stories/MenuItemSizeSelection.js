import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { MenuItemSizeSelection } from 'components';
import documentation from 'components/MenuItemSizeSelection/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

const mockItemData = [
  { id: 501, size: 'small', price: '3.95', calories: '260' },
  { id: 502, size: 'medium', price: '5.20', calories: '350' },
  { id: 503, size: 'large', price: '8.50', calories: '500' },
  { id: 504, price: '11', calories: '600' }
];

// mock parent element
class MenuItemSizeSelectionParent extends Component {
  state = {
    selected: this.props.selected
  };

  handleSelect = item => {
    this.setState({
      selected: item
    });
  };

  render() {
    return (
      <div className="col-12 md:col-5 lg:col-4">
        <MenuItemSizeSelection
          items={this.props.items}
          selected={this.state.selected}
          handleSelect={this.handleSelect}
        />
      </div>
    );
  }
}

storiesOf('MenuItemSizeSelection', module).add(
  'default',
  () => <MenuItemSizeSelectionParent items={mockItemData} />,
  addons
);
