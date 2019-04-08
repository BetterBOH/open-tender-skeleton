import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { lineItemsData } from 'constants/Mocks';
import { MenuItemSizeSelection } from 'components';
import documentation from 'components/MenuItemSizeSelection/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// mock size option group
const burritoLineItem = lineItemsData[2];
const burritoSizeOptionGroup = burritoLineItem.option_groups[5];

// mock parent element
class MenuItemSizeSelectionParent extends Component {
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
      <div className="col-12 md:col-5 lg:col-4">
        <MenuItemSizeSelection
          menuItemSizeOptionGroup={this.props.menuItemSizeOptionGroup}
          selected={this.state.selected}
          handleSelect={this.handleSelect}
        />
      </div>
    );
  }
}

storiesOf('MenuItemSizeSelection', module).add(
  'default',
  () => (
    <MenuItemSizeSelectionParent
      menuItemSizeOptionGroup={burritoSizeOptionGroup}
    />
  ),
  addons
);
