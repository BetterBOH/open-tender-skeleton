import React, { PureComponent } from 'react';
import get from 'utils/get';
// import { Dropdown, Button, Text, Icon } from 'components';

class MenuNav extends PureComponent {
  state = {
    selectedCategory: get(this, 'props.menuCategories[0]')
  };

  handleChange = e => {
    this.setState({ selectedCategory: e.target.value });
  };

  render() {
    const { menuCategories } = this.props;

    return (
      <div className="MenuNav p1 bg-color-white flex justify-between items-center">
        <select
          value={this.state.selectedCategory}
          onChange={this.handleChange}
        >
          {menuCategories.map(category => (
            <option
              key={get(category, 'value')}
              to={get(category, 'value')}
              value={get(category, 'label')}
            >
              {get(category, 'label', '')}
            </option>
          ))}
        </select>
        {/* <Button className="flex items-center">
          <Text className="color-gray" size="description">
            {this.state.selectedCategory}
          </Text>
          <div className="MenuNav__icon ml_5">
            <Icon icon="Dropdown" fill="gray" />
          </div>
        </Button> */}
      </div>
    );
  }
}

export default MenuNav;
