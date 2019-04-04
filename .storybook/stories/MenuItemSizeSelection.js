import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { MenuItemSizeSelection } from 'components';
import documentation from 'components/MenuItemSizeSelection/README.md';
import 'styles.scss';

const addons = {
  notes: { markdown: documentation }
};

// Mock line item size option group
const menuItemSizeOptionGroup = {
  description: '',
  id: 1557,
  included_options: 0,
  is_size: 1,
  is_upsell: 0,
  max_options: 1,
  menu_position: 6,
  min_options: 1,
  name: 'Burrito Size',
  option_items: [
    {
      allergen_classes: '',
      allergens: '',
      app_image_url: null,
      delivery_days: null,
      description: '',
      end_date: null,
      end_date_str: '',
      group_id: 1557,
      height: null,
      id: 22924,
      increment: 1,
      ingredients: null,
      kds_groups: [],
      large_image_url: null,
      length: null,
      max_quantity: 0,
      menu_position: 1,
      min_quantity: 1,
      name: 'Small',
      nutritional_info: {},
      opt_is_default: 0,
      plu: '',
      price: '8.00',
      sales_tax_override: null,
      service_restrictions: null,
      serving_size: null,
      short_description: '',
      short_name: 'Small',
      shorthand: 'sm',
      slug: 'small',
      small_image_url: null,
      start_date: null,
      start_date_str: '',
      tag_classes: '',
      tags: '',
      taxes: [],
      temperature: 'Cold',
      weight: null,
      width: null
    },
    {
      allergen_classes: '',
      allergens: '',
      app_image_url: null,
      delivery_days: null,
      description: '',
      end_date: null,
      end_date_str: '',
      group_id: 1557,
      height: null,
      id: 22925,
      increment: 1,
      ingredients: null,
      kds_groups: [],
      large_image_url: null,
      length: null,
      max_quantity: 0,
      menu_position: 2,
      min_quantity: 1,
      name: 'Medium',
      nutritional_info: {},
      opt_is_default: 0,
      plu: '',
      price: '10.00',
      sales_tax_override: null,
      service_restrictions: null,
      serving_size: null,
      short_description: '',
      short_name: 'Medium',
      shorthand: 'md',
      slug: 'medium',
      small_image_url: null,
      start_date: null,
      start_date_str: '',
      tag_classes: '',
      tags: '',
      taxes: [],
      temperature: 'Cold',
      weight: null,
      width: null
    },
    {
      allergen_classes: '',
      allergens: '',
      app_image_url: null,
      delivery_days: null,
      description: '',
      end_date: null,
      end_date_str: '',
      group_id: 1557,
      height: null,
      id: 22926,
      increment: 1,
      ingredients: null,
      kds_groups: [],
      large_image_url: null,
      length: null,
      max_quantity: 0,
      menu_position: 3,
      min_quantity: 1,
      name: 'Large',
      nutritional_info: {},
      opt_is_default: 0,
      plu: '',
      price: '12.00',
      sales_tax_override: null,
      service_restrictions: null,
      serving_size: null,
      short_description: '',
      short_name: 'Large',
      shorthand: 'lg',
      slug: 'large',
      small_image_url: null,
      start_date: null,
      start_date_str: '',
      tag_classes: '',
      tags: '',
      taxes: [],
      temperature: 'Cold',
      weight: null,
      width: null
    }
  ],
  short_name: 'Burrito Size',
  slug: 'burrito-size'
};

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
      menuItemSizeOptionGroup={menuItemSizeOptionGroup}
    />
  ),
  addons
);
